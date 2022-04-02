//Fill in the skills table.
var skill_table = document.getElementById("skill-table");
var skills_str = "";
var ability_flags = {};
//Keep track of when the relevant ability changes.
for(s in enchiridion.skills){
    var skill = enchiridion.skills[s];
    var ability_cell = "";
    if(!(skill.ability in ability_flags)){
        /*This branch triggers each time the loop encounters a new ability and creates a merged cell with the ability's abbreviation.*/
        ability_flags[skill.ability] = true;
        //Trip the flag so we only make one cell per ability.
        ability_cell = `<td class="skill ability" name="${skill.ability}" title="${enchiridion.abilities[skill.ability].description}" rowspan="${enchiridion.abilities[skill.ability].skills.length}">${skill.ability}</td>`;
        /*Create a cell that displays the ability abbreviation with its description in the tooltip.
        Set the rowspan to the number of skills that use that ability.*/
    }

    skills_str += `<tr title="${skill.description}">
        ${ability_cell}
        <td class="skill name">${skill.name}</td>
        <td name="${skill.name}" class="skill bonus">0</td>
        <td><input type="number" name="${skill.name}" class="skill exp" maxlength="3" min="0" max="999" onchange="editHandler(event)"/><td><button name="${skill.name}" class="skill roller" onclick="rollHandler(event)"><i class="fa-solid fa-dice-d20"></i></button></td>
        </tr>`;
        /*For each skill, set the tooltip for the row to the skill's description. Create a cell for the skill name, skill bonus, EXP invested into that skill, and a button to roll for the skill.*/
}

skill_table.innerHTML+=skills_str;


//In a similar fashion, fill in the status effects table.
var status_table = document.getElementById("status-table");
var status_str = "";
for(condition in enchiridion.conditions){
    status_str += `<tr title=${enchiridion[condition]}><td>${condition}</td>
    <td><input type="checkbox" name="${condition}" class="condition" onchange="editHandler(event)"/></td></tr>`;
    /*For each condition, set the tooltip for the row to the condition's description. Create a cell for the condition name and a cell with a checkbox to toggle the effect. */
}

status_table.innerHTML += status_str;

function rollHandler(e){
    //This function uses the evalCalc function
    if(e.target.className.includes("skill")){
        var bonus = Number($(`.skill.bonus[name="${e.target.name}"]`)[0].innerText);
        var roll = {
            "type":"sum",
            "terms":[bonus,{
                "type":"dice",
                "quantity":1,
                "sides":20
            }]
        }
        alert(evalCalc(roll))
    }
}


function genTree(tree){
    //This function generates the UI of a skill/mastery tree.
    var header = "<th>Perk</th> <th>EXP</th> <th>Requirements</th> <th>Description</th>";
    var body = "";
    for(node in tree){
        var name_cell = `<td>${tree[node].name}</td>`;
        var exp_max = (tree[node].hasOwnProperty("limit")) ? tree[node].limit*tree[node].cost : 1;
        /*If there is a limit to the number of times you can take the perk, then the max EXP is the
        EXP cost scaled by that limit. Most perks can only be taken once.*/
        exp_max = (exp_max>=0) ? `max="${exp_max}"` : "";
        //If the max is negative, then there is no limit to the number of times you can take the perk.
        var exp_input = `<input type="number" min="0" step="${tree[node].cost}" ${exp_max} onchange="editHandler(event)" name="${tree[node].name}"/>`;
        /*Setting the step to the cost means that you must allocate all the required EXP at once. This makes it easier to track the cost, as it's not easily stored as any other attribute.*/
        var exp_cell = `<td>${exp_input} / ${tree[node].cost}</td>`;
        var req_cell = "<td> - </td>";
        if(node.hasOwnProperty("requirements")){
            var req_cell = `<td>${tree[node].requirements.join("<br />")}</td>`;
        }
        var description_cell = `<td>${tree[node].description}</td>`
        body += `<tr>${name_cell}${exp_cell}${req_cell}${description_cell}</tr>`;
    }

    return `<table>${header+body}</table>`;
}

for(ability in enchiridion.abilities){
    var tree = enchiridion.abilities[ability].tree;
    $("#ability-trees")[0].innerHTML += genTree(tree);
}
