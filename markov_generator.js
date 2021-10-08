function MarkovGenerator(type="words"){

    var stx = String.fromCharCode(2);
    var etx = String.fromCharCode(3);

    this.nodes = new Set();
    this.chain = {};

    this.node_delimiter="";
    if(type=="words"){
        this.node_delimieter = "";
        this.example_delimiter = " ";
    } else if(type=="sentences"){
        this.node_delimiter = " ";
        this.example_delimiter = ". ";
    }

    this.train = function(raw_source){
        //Itemize the source by splitting it into an array of exmples, which
        //consist of arrays of nodes
        var source = raw_source.toLowerCase().split(this.example_delimiter);
        for(i=0;i<source.length;i++){
            source[i] = source[i].split(this.node_delimiter);
            source[i].unshift(stx);
            source[i].push(etx);
            //Add the Start Text and End Text ASCII characters on either end of
            //the example as "sentinels".
        }

        //Index the unique nodes.
        var raw_nodes = raw_source.toLowerCase().replaceAll(this.example_delimiter,this.node_delimiter);
        //Convert the raw source to a single example by replacing example delimiters with node delimiters.
        raw_nodes = raw_nodes.split(this.node_delimiter);
        //Split the meta-example.
        raw_nodes.unshift(stx);
        raw_nodes.unshift(etx);
        //Add in STX and ETX for the first call of `train`.
        var new_nodes = new Set(raw_nodes);
        new_nodes = new Set([...raw_nodes].filter(x => !this.nodes.has(x)));
        //Keep track of the new nodes that are added by this call of `train()`.


        for(node of new_nodes){
            this.chain[node] = {
                    "successors":[...this.nodes],
                    "weights":Array(this.nodes.size).fill(0)
                };
        }
        //Add new nodes to chain.

        function add_successor(node,successor){
            node.successors.push(successor);
            node.weights.push(0);
        }

        new_nodes.forEach(node => this.nodes.add(node));
        //Add new unique nodes.

        for(node of this.nodes){
            if(node==etx){
                continue;
            } else {
                new_nodes.forEach(successor => add_successor(this.chain[node],successor));
            }
        }
        //Grow existing nodes' arrays to include new nodes.

        console.log(this.chain);
        console.log(this.nodes);


        for(example of source){
            var prev = null;
            for(node of example){
                if(node==stx){
                    //End Text character does not have a predecessor node.
                } else {
                    successor_index = this.chain[prev].successors.indexOf(node);
                    this.chain[prev].weights[successor_index] += 1;
                    //For every node, increase the strength of the connection from
                    //its predecessor by 1.
                }
                prev = node;
            }
        }

        for(node in this.chain){
            //Compute cumultaive distributions.
            var norm = 0;
            for(weight of this.chain[node].weights){
                norm += weight;
            }

            this.chain[node].cdf = [];
            var running_total = 0;
            for(weight of this.chain[node].weights){
                running_total += weight/norm;
                this.chain[node].cdf.push(running_total);
            }
        }

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
