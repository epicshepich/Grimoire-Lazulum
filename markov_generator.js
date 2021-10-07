var stx = String.fromCharCode(2);
var etx = String.fromCharCode(3);

function build_chain(source){
    var words = source.toLowerCase().split(" ");
    for(var i=0;i<words.length;i++){
        words[i] = stx + words[i] + etx;
        //Add the Start Text and End Text ASCII characters on either end of
        //the word as "sentinels".
    }

    var chain = {};

    for(word of words){
        for(var j=0; j<word.length;j++){
            if(word[j]==etx){
                //End Text character does not have a successor node, and
                //including this clause prevents the algorithm from out-of-bounds
                //indexing the string.
                continue;
            } else {
                if(!(word[j] in chain)){
                    chain[word[j]] = {
                        "successors":[],
                        "weights":[]
                    };
                }

                if(chain[word[j]].successors.indexOf(word[j+1])<0){
                    //Make space for new successor nodes.
                    chain[word[j]].successors.push(word[j+1]);
                    chain[word[j]].weights.push(0);
                }
                successor_index = chain[word[j]].successors.indexOf(word[j+1]);
                chain[word[j]].weights[successor_index] += 1;
                //Increase the raw weight of the successor node by 1.
            }
        }
    }

    for(node in chain){
        chain[node].cdf = get_cdf(chain[node].weights);
    }

    return chain;
}

function get_cdf(array){
    norm = 0;
    for(item of array){
        norm += item;
    }

    var cdf = [];
    var running_total = 0;
    for(item of array){
        running_total += item/norm;
        cdf.push(running_total);
    }
    return cdf;
}


function markov_generate(chain){
    var pointer = stx;
    var output = "";
    while(pointer !== etx){
        p = Math.random();

        next_pointer = chain[pointer].successors[0];
        for(i=0;i<chain[pointer].successors.length;i++){
            if(p<chain[pointer].cdf[i]){
                next_pointer = chain[pointer].successors[i];
                break;
            } else {
                continue;
            }
        }
        pointer = next_pointer;
        output += pointer;
    }
    output = output.replace(etx,"");
    return output;
}

function multimarkov_generate(chain,n){
    outputs = [];
    for(k=0;k<n;k++){
        outputs.push(markov_generate(chain));
    }
    return outputs;
}
