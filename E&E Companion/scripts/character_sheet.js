var Character = {
    "name":"Shepich the Epic",
    "abilities":{
        "STR":0,
        "DEX":0,
        "CON":0,
        "INT":0,
        "WIS":0,
        "CHA":0
    },
    "skills":{
    },
    "stats":{
        "HP":1,
        "MP":1
    },
    "status":{
    },
    "backstory":""
}

function editHandler(e){
    //if(e.target.className.includes(""))

    if(e.target.className.includes("condition")){
        Character.status[e.target.name] = e.target.checked;
    }

    if(e.target.className.includes("exp")){
        if(e.target.className.includes("skill")){
            Character.skills[e.target.name] = e.target.valueAsNumber;
        } else if(e.target.className.includes("hp")){



        }
    }
    loadCharacterSheet(Character);
}


function loadCharacterSheet(character){
    $("#character-name")[0].value = character.name;

    for(skill in enchiridion.skills){
        var exp = (skill in character.skills) ? character.skills[skill] : 0;
        $(`.skill.exp[name="${skill}"]`)[0].value = exp;
        var modifier = character.abilities[enchiridion.skills[skill].ability];
        var bonus = modifier+Math.floor(exp/2);
        $(`.skill.bonus[name="${skill}"]`)[0].innerText = (bonus>0)?`+${bonus}`:bonus;
    }

    for(ability in character.abilities){
        var modifier = character.abilities[ability];
        modifier = (modifier > 0) ? `+${modifier}` : `${modifier}`;
        $(`.skill.ability[name="${ability}"]`)[0].innerHTML = `${ability}<br />(${modifier})`;
    }

    for(condition in character.status){
        if(character.status[condition]){
            $(`.condition[name=${condition}]`)[0].checked = true;
        }
    }

    /*$(`.exp[name="HP"]`)[0].value = character.HP.EXP;
    var hp_max = Math.max(1,character.abilities.CON) + character.HP.EXP;
    $(`.hp[name="HP Max"]`)[0].innerText = hp_max;*/


    $(`.hp[name="HP"]`)[0].value = character.stats.HP;
    if(character.stats.hasOwnProperty("Temp Max HP")){
        $(`.hp[name="Temp Max HP"]`)[0].value = character.stats["Temp Max HP"];
    }

    $(`.mp[name="MP"]`)[0].value = character.stats.MP;
    if(character.stats.hasOwnProperty("Temp Max MP")){
        $(`.mp[name="Temp Max MP"]`)[0].value = character.stats["Temp Max MP"];
    }
}


function importCharacterSheet(){
    var file = $("#character-sheet-file")[0].files[0];
    var reader = new FileReader();

    reader.addEventListener("load",function(){
        Character =  JSON.parse(reader.result);
        console.log(Character);
        loadCharacterSheet(Character);
    });

    reader.readAsText(file);
}


function exportCharacterSheet(){
    var sheet_json = JSON.stringify(Character, null, 4)
    var sheet_blob = new Blob([sheet_json],{type:"application/json"});
    saveAs(sheet_blob,Character.name)
}

loadCharacterSheet(Character)
