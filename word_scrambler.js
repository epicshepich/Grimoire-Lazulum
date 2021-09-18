function scramble(word){
    var letters = word.split("")
    var output = []
    while(letters.length>0){
        var j = Math.floor(Math.random()*letters.length)
        output.push(letters[j])
        letters.splice(j,1)

    }
    return output.join("")
}

function multiscramble(word,n){
    var max_permutations = unique_perms(word)
    var iters = n
    if(n>max_permutations){
        iters = max_permutations
    }

    var output = []
    for(var i=0;i<iters;i++){
        var temp = scramble(word)
        if(output.indexOf(temp)>-1){
            i--
        } else {
            output.push(temp)
        }
    }
    return output
}

function factorial(n){
    var result
    if(n==0){
        result = 1
    } else{
        result = n*factorial(n-1)
    }

    return result
}

function unique_perms(string){
    var letters = string.split("")
    var frequencies = {}
    for(var i=0;i<letters.length;i++){
        if(frequencies[letters[i]]){
            frequencies[letters[i]] += 1
        } else {
            frequencies[letters[i]] = 1
        }
    }

    var perms = factorial(letters.length)
    for(var key in frequencies){
        perms = perms/factorial(frequencies[key])
    }

    return perms
}
