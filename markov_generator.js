function MarkovGenerator(type="words"){

    var stx = String.fromCharCode(2);
    var etx = String.fromCharCode(3);

    this.node_delimiter="";
    if(type=="words"){
        this.node_delimieter = "";
    } else if(type=="sentences"){
        this.node_delimiter = " ";
    }

    this.fit = function(raw_source){
        //Itemize the source by splitting it into an array of exmples, which
        //consist of arrays of nodes.
        var source = [];
        if(type=="words"){
            source = raw_source.toLowerCase().split(" ");
        } else if (type=="sentences"){
            source = raw_source.toLowerCase().split(". ");
        }

        for(i=0;i<source.length;i++){
            source[i] = source[i].split(this.node_delimiter);
        }


        //Index the unique nodes.
        var nodes = [];
        for(example of source){
            for(node of example){
                if(nodes.indexOf(node)<0){
                    nodes.push(node);
                }
            }
        }


        //Build a Markov Chain from the itemized input.
        nodes.push(stx);
        nodes.push(etx);

        for(var i=0;i<source.length;i++){
            source[i].unshift(stx);
            source[i].push(etx);
            //Add the Start Text and End Text ASCII characters on either end of
            //the example as "sentinels".
        }

        var chain = {};

        for(node of nodes){
            chain[node] = {
                    "successors":[...nodes],
                    "weights":Array(nodes.length).fill(0)
                };
            //Create nodes in the chain that contain a list of successor nodes
            //with associated connection probabilities.
        }

        for(example of source){
            var prev = null;
            for(node of example){
                if(node==stx){
                    //End Text character does not have a predecessor node.
                } else {
                    successor_index = chain[prev].successors.indexOf(node);
                    chain[prev].weights[successor_index] += 1;
                    //For every node, increase the strength of the connection from
                    //its predecessor by 1.
                }
                prev = node;
            }
        }

        for(node in chain){
            //Compute cumultaive distributions.
            var norm = 0;
            for(weight of chain[node].weights){
                norm += weight;
            }

            chain[node].cdf = [];
            var running_total = 0;
            for(weight of chain[node].weights){
                running_total += weight/norm;
                chain[node].cdf.push(running_total);
            }
        }

        this.chain = chain;
    }

    this.generate = function(N=1,min=0,max=Infinity){
        outputs = [];
        for(k=0;k<N;k++){
            var pointer = stx;
            var output = [];
            while(pointer !== etx){
                p = Math.random();

                next_pointer = this.chain[pointer].successors[0];
                for(i=0;i<this.chain[pointer].successors.length;i++){
                    if(p<this.chain[pointer].cdf[i]){
                        next_pointer = this.chain[pointer].successors[i];
                        break;
                    } else {
                        continue;
                    }
                }
                pointer = next_pointer;
                output.push(pointer);
            }
            output.pop();
            //Last element generated will be etx, which we shall remove.
            if(output.length<min || output.length>max){
                //Loop again if we get an unacceptable output.
                k-=1;
            } else {
                outputs.push(output.join(this.node_delimiter));
            }

        }
        return outputs;
    }


}
