//For extracting set data from scryfall.com.
//Expansions at https://scryfall.com/sets?type=expansion&lang=en
//Core sets at https://scryfall.com/sets?type=core&lang=en
var sets = [];
for(anchor of $(".flexbox a")){
    sets.push({
        "name":anchor.innerText.split("\n")[0],
        "code":anchor.innerText.split("\n")[1],
        "link":anchor.href
    });
}

var output = "Set Name,Expansion Code,Link\n";
for(set of sets){
    output += `${set.name},${set.code},${set.link}\n`;
}

console.log(output)
