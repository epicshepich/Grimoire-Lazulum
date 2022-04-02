var enchiridion = {
    "abilities":{
        "STR":{
            "name":"Strength",
            "abbreviation":"STR",
            "description":"Bodily power, natural athleticism",
            "skills":["Athletics","Grapple","Heave"],
            "tree":{
                "STR Improvement":{
                    "name":"STR Improvement",
                    "description":"+1 to STR modifier",
                    "cost":18,
                    "limit":5
                }
            }
        },
        "DEX":{
            "name":"Dexterity",
            "abbreviation":"DEX",
            "description":"Reflexes, agility, balance",
            "skills":["Acrobatics","Evasion","Sleight of Hand","Stealth","Swiftness"],
            "tree":{
                "DEX Improvement":{
                    "name":"DEX Improvement",
                    "description":"+1 to DEX modifier",
                    "cost":18,
                    "limit":5
                }
            }
        },
        "CON":{
            "name":"Constitution",
            "abbreviation":"INT",
            "abbreviation":"CON",
            "description":"Vitality, stamina, resilience",
            "skills":["Concentration","Fortitute","Persistence","Toughness"],
            "tree":{
                "CON Improvement":{
                    "name":"CON Improvement",
                    "description":"+1 to CON modifier",
                    "cost":18,
                    "limit":5
                },
                "HP Increase":{
                    "name":"HP Increase",
                    "description":"Increase your Max HP and current HP by 1.",
                    "cost":1,
                    "limit":-1
                }
            }
        },
        "INT":{
            "name":"Intelligence",
            "abbreviation":"INT",
            "description":"Mental acuity, analytical ability",
            "skills":["Arcana","History","Investigation","Nature","Navigation","Recall","Trivia"],
            "tree":{
                "INT Improvement":{
                    "name":"INT Improvement",
                    "description":"+1 to INT modifier",
                    "cost":18,
                    "limit":5
                }
            }
        },
        "WIS":{
            "name":"Wisdom",
            "abbreviation":"WIS",
            "description":"Awareness, intuition, insight",
            "skills":["Animal Handling","Insight","Medicine","Perception","Sanity","Survival"],
            "tree":{
                "WIS Improvement":{
                    "name":"WIS Improvement",
                    "description":"+1 to WIS modifier",
                    "cost":18,
                    "limit":5
                }
            }
        },
        "CHA":{
            "name":"Charisma",
            "abbreviation":"CHA",
            "description":"Confidence, eloquence, leadership, charm",
            "skills":["Deception","Gather Information","Intimidation","Performance","Persuasion","Will"],
            "tree":{
                "CHA Improvement":{
                    "name":"CHA Improvement",
                    "description":"+1 to CHA modifier",
                    "cost":18,
                    "limit":5
                }
            }
        }
    },
    "skills":{
        "Athletics": {
            "name":"Athletics",
            "ability":"STR",
            "description":"Climbing, jumping, swimming"
            },
        "Grapple": {
            "name":"Grapple",
            "ability":"STR",
            "description":"Holding an opponent immobilized"
            },
        "Heave": {
            "name":"Heave",
            "ability":"STR",
           "description":"Lifting, carrying, throwing, or otherwise moving heavy objects"
            },
        "Acrobatics": {
            "name":"Acrobatics",
            "ability":"DEX",
            "description":"Staying on your feet in tricky situation, acrobatic stunts (dives, rolls, flips)"
            },
        "Sleight of Hand": {
            "name":"Sleight of Hand",
            "ability":"DEX",
            "description":"Legerdemain, manual trickery, pickpocketing"
            },
        "Stealth": {
            "name":"Stealth",
            "ability":"DEX",
            "description":"Hiding, moving silently, evading the perception of others"
            },
        "Evasion": {
            "name":"Evasion",
            "ability":"DEX",
            "description":"Escaping bindings, avoiding attacks (AC improvement)"
            },
        "Swiftness": {
            "name":"Swiftness",
            "ability":"DEX",
            "description":"Movement speed, initiative"
            },
        "Toughness": {
            "name":"Toughness",
            "ability":"CON",
            "description":"Ability to tank a hit (AC improvement)"
            },
        "Persistence": {
            "name":"Persistence",
            "ability":"CON",
            "description":"Recovery, resistance to exhaustion"
            },
        "Concentration": {
            "name":"Concentration",
            "ability":"CON",
            "description":"Focusing under pressure"
            },
        "Fortitude": {
            "name":"Fortitude",
            "ability":"CON",
            "description":"Resistance to poisons and intoxicants"
            },
        "Navigation": {
            "name":"Navigation",
            "ability":"INT",
            "description":"Orienting yourself, charting a path to a distant location"
            },
        "Investigation": {
            "name":"Investigation",
            "ability":"INT",
            "description":"Searching for clues, making deductions"
            },
        "Recall": {
            "name":"Recall",
            "ability":"INT",
            "description":"Remembering details about previous events, remembering voices/faces etc."
            },
        "Arcana": {
            "name":"Arcana",
            "ability":"INT",
            "description":"Knowledge about magic and arcane lore"
            },
        "Nature": {
            "name":"Nature",
            "ability":"INT",
            "description":"Knowledge about terrain, flora/fauna, weather, etc."
            },
        "History": {
            "name":"History",
            "ability":"INT",
            "description":"Knowledge about historical events and mythology"
            },
        "Trivia": {
            "name":"Trivia",
            "ability":"INT",
            "description":"Knowledge of miscellaneous facts"
            },
        "Perception": {
            "name":"Perception",
            "ability":"WIS",
            "description":"General awareness, ability to actively detect the presence of something."
            },
        "Animal Handling": {
            "name":"Animal Handling",
            "ability":"WIS",
            "description":"Calming animals, maneuvering mounts, understanding animals' intentions"
            },
        "Medicine": {
            "name":"Medicine",
            "ability":"WIS",
            "description":"Stabilizing a dying companion, diagnosing an illness"
            },
        "Insight": {
            "name":"Insight",
            "ability":"WIS",
            "description":"Read between the lines, glean clues from mannerisms, resist persuasion/intimidation"
            },
        "Survival": {
            "name":"Survival",
            "ability":"WIS",
            "description":"Track animals, predict weather, detect/avoid natural hazards"
            },
        "Sanity": {
            "name":"Sanity",
            "ability":"WIS",
            "description":"Resisting hallucinations/mental effects"
            },
        "Persuasion": {
            "name":"Persuasion",
            "ability":"CHA",
            "description":"Influencing others with tact or otherwise good nature"
            },
        "Performance": {
            "name":"Performance",
            "ability":"CHA",
            "description":"Playing an instrument, dancing, storytelling, acting, otherwise entertaining"
            },
        "Deception": {
            "name":"Deception",
            "ability":"CHA",
            "description":"Convincingly hiding the truth"
            },
        "Intimidation": {
            "name":"Intimidation",
            "ability":"CHA",
            "description":"Influencing other by coercion"
            },
        "Gather Information": {
            "name":"Gather Information",
            "ability":"CHA",
            "description":"Picking up rumors, learn about local happenings"
            },
        "Will": {
            "name":"Will",
            "ability":"CHA",
            "description":"Resisting temptations, mind-over-matter"}
    },
    "stats":{
        "Max HP":{
            "name":"Maximum Hit Points",
            "abbreviation":"HP Max",
            "description":"The cap for a characters hit points.",
            "calculation":{
                "type":"sum",
                "terms":[
                    {
                        "type":"max",
                        "terms":[
                            1,
                            {
                                "type":"ability",
                                "ability":"CON"
                            }
                        ]
                    }
                ]
            }
        },
        "HP":{
            "name":"Hit Points",
            "abbreviation":"HP",
            "description":"A character's HP is a representation of their stamina or how much damage they can take/avoid. A character's total HP is capped by their Max HP. Taking damage or losing stamina will reduce a character's HP, and once a character's HP total drops to 0, they begin dying."
        },
        "Temp Max HP":{
            "name":"Temporary Maximum Hit Points",
            "abbreviation":"Temp Max HP",
            "description":"As a result of status conditions and other effects, a character's maximum hit points may be temporarily altered."
        },
        "Max MP":{
            "name":"Maximum Mana Points",
            "abbreviation":"MP Max",
            "description":"The cap for a characters mana.",
            "calculation":{
                "type":"sum",
                "terms":[1,
                    {
                        "type":"exp"
                    }
                ]
            }
        },
        "MP":{
            "name":"Mana Points",
            "abbreviation":"MP",
            "description":"A character's MP is a representation of their available magical energy. A character's total MP is capped by their Max MP. Using magic will reduce a player's MP. Unless otherwise specified, a character cannot create a magical effect if it would lower their MP total below 0. If a character's MP total reaches 0, they take a point of exhaustion."
        },
        "Temp Max MP":{
            "name":"Temporary Maximum Hit Points",
            "abbreviation":"Temp Max MP",
            "description":"As a result of status conditions and other effects, a character's maximum mana points may be temporarily altered."
        },
        "HD":{
            "name":"Hit Dice",
            "abbreviation":"HD",
            "description":"A character's hit dice relate to their ability to recover from damage. Hit dice can be expended during short rests to replenish a character's HP, and they are restored during a long rest. During a short rest, as many unexpended hit dice as desired can be rolled. The character regains HP equal to their CON modifier for each die rolled, plus the result of the roll"
        },
        "HD Type":{
            "name":"Hit Die Type",
            "abbreviation":"HD Type",
            "description":"The number of sides on a character's hit dice."
        },
        "Max HD":{
            "name":"Maximum Hit Dice",
            "abbreviation":"Max HD",
            "description":"The cap for a character's hit dice."
        },
        "Temp Max HD":{
            "name":"Temporary Maximum Hit Dice",
            "abbreviation":"Temp Max MP",
            "description":"As a result of status conditions and other effects, a character's maximum hit dice may be temporarily altered."
        },
        "AC":{
            "name":"Armor Class",
            "abbreviation":"AC",
            "description":"Ability to avoid damage",
            "calculation":{
                "type":"sum",
                "terms":[
                    8,
                    {
                        "type":"skill",
                        "skill":"Toughness",
                        "scalar":[1,3],
                        "action":"ceil"
                    },
                    {
                        "type":"skill",
                        "skill":"Evasion",
                        "scalar":[1,3],
                        "action":"ceil"
                    },
                    {

                        "type":"stat",
                        "stat":"Size Modifier",
                        "scalar":-1
                    }
                ]
            }
        }
    },
    "conditions":{
        "Blinded":"A blinded creature can’t see and automatically fails any ability check that requires sight. Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage.",
        "Charmed":"A charmed creature can’t Attack the charmer or target the charmer with harmful effects. The charmer has advantage on any ability check to interact socially with the creature.",
        "Deafened":"A deafened creature can’t hear and automatically fails any ability check that requires hearing.",
        "Frightened":"A frightened creature has disadvantage on Ability Checks and Attack rolls while the source of its fear is within Line of Sight. The creature can’t willingly move closer to the source of its fear.",
        "Grappled":"A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed. The condition ends if the Grappler is incapacitated (see the condition). The condition also ends if an Effect removes the grappled creature from the reach of the Grappler or Grappling Effect, such as when a creature is hurled away by a magical force.",
        "Incapacitated":"An incapacitated creature can’t take Actions or Reactions.",
        "Invisible":"An invisible creature is impossible to see without the aid of magic or a Special sense. For the Purpose of Hiding, the creature is heavily obscured. The creature’s Location can be detected by any noise it makes or any tracks it leaves. Attack rolls against the creature have disadvantage, and the creature’s Attack rolls have advantage.",
        "Paralyzed":"A paralyzed creature is incapacitated (see the condition) and can’t move or speak. The creature automatically fails Strength and Dexterity Saving Throws. Attack rolls against the creature have advantage. Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.",
        "Petrified":"A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its scalar increases by a factor of ten, and it ceases aging. The creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings. Attack rolls against the creature have advantage. The creature automatically fails Strength and Dexterity Saving Throws. The creature has Resistance to all damage. The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.",
        "Poisoned":"A poisoned creature has disadvantage on Attack rolls and Ability Checks.",
        "Prone":"A prone creature’s only Movement option is to crawl, unless it stands up and thereby ends the condition. The creature has disadvantage on Attack rolls. An Attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the Attack roll has disadvantage.",
        "Restrained":"A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed. Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage. The creature has disadvantage on Dexterity Saving Throws.",
        "Shaken (X)":"A shaken creature takes a -X penalty on all d20 rolls",
        "Stunned":"A stunned creature is incapacitated (see the condition), can’t move, and can speak only falteringly. The creature automatically fails Strength and Dexterity Saving Throws. Attack rolls against the creature have advantage.",
        "Unconscious":"An unconscious creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings. The creature drops whatever it’s holding and falls prone. The creature automatically fails Strength and Dexterity Saving Throws. Attack rolls against the creature have advantage. Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.",
        "Exhaustion":"Some Special Abilities and environmental Hazards, such as starvation and the long-­term Effects of freezing or scorching temperatures, can lead to a Special condition called exhaustion."
    }
}


function parseCalc(obj){
    /*This function converts a calculation object into a string representing the
    plaintext expression of the calculation.*/
    var expression = "";
    if(!obj.hasOwnProperty("type")){
        obj.type = undefined;
    }

    var terms = [];
    //If the calculation involves multiple terms, parse each term before continuing.
    if(obj.hasOwnProperty("terms")){
        for(term of obj.terms){
            terms.push(parseCalc(term));
        }
    }

    switch(obj.type){
        case "sum":
            expression = terms.join(" + ");
            //Combine the terms of a summation with + signs.
            break;

        case "product":
            expression = terms.join(" * ");
            //Combine the terms of a product with * signs.
            break;

        case "max":
            expression = `Max(${terms.join(", ")})`;
            //If the calculation is a maximum, then separate the terms with commas.
            break;

        case "min":
            expression = `Min(${terms.join(", ")})`;
            //If the calculation is a minimum, then separate the terms with commas.
            break;

        case "dice":
            expression = `${parseCalc(obj.quantity)}d${parseCalc(obj.sides)}`;
            /*If the calculation is a dice roll, then write XdY where X is the
            quantity of dice and Y is the number of sides.*/
            break;

        case "variable":
            expression = (obj.hasOwnProperty("symbol")) ? obj.symbol : "X";
            //If the calculation is a variable, then write the variable's symbol (default is X).
            break;

        case "exp":
            expression = "EXP";
            //If the the calculation is an experience value, just write "EXP".
            break;

        case "ability":
            expression = obj.ability;
            //If the calculation is an ability modifier, write the name of the modifier.
            break;

        case "skill":
            expression = `(${obj.skill})`;
            /*If the calculation is a skill bonus, write the skill name in parentheses
            because some skill names consist of multiple words.*/
            break;

        case "stat":
            expression = `(${obj.stat})`;
            /*If the calculation is a stat, write the stat name in parentheses
            because some stat names consist of multiple words.*/
            break;

        default:
            expression = `${obj}`;
            /*If the object's type is undefined, then just write the object itself.
            Usually, this is a flat number to be added.*/

    }

    if(!obj.hasOwnProperty("action")){
        obj.action = undefined;
    }

    var scalar = (obj.hasOwnProperty("scalar")) ? obj.scalar : "";
    //If a scalar is not specified, leave it blank.
    scalar = (Array.isArray(scalar)) ? `(${scalar.join("/")})` : scalar;
    //Fractional scalars are specified as an array of [numerator, denominator].
    expression = (scalar=="") ? expression : `${scalar}(${expression})`;
    //If there is a scalar, put the expression in parentheses with the scalar out front.

    /*If the "floor", "ceil", or "round" actions are specified in the calculation,
    use the appropriate parentheses.*/
    switch(obj.action){
        case "floor":
            expression = `\u230A${expression}\u230B`;
        break;

        case "ceil":
            expression = `\u2308${expression}\u2309`;
            break;

        case "round":
            expression = `\u230A${expression}\u2309`;
            break;
    }

    return expression;
}


function evalCalc(obj){
    /*This function evaluates a calculation object, prompting for inputs and retrieving relevant modifiers via queries, and returns the result.*/
    var value = "";
    if(!obj.hasOwnProperty("type")){
        obj.type = undefined;
    }

    var terms = [];
    //If the calculation involves multiple terms, evaluate each term before continuing.
    if(obj.hasOwnProperty("terms")){
        for(term of obj.terms){
            terms.push(evalCalc(term));
        }
    }

    switch(obj.type){
        case "sum":
            value = 0;
            for(term of terms){
                value += term;
            }
            //Compute the sum of all terms.
            break;

        case "product":
            value = 1;
            for(term of obj){
                value *= term;
            }
            //Compute the product of all terms.
            break;

        case "max":
            value = Math.max(...terms);
            //Unpack the terms and select the maximum value.
            break;

        case "min":
            expression = Math.min(...terms);
            //Unpack the terms and find the minimum value.
            break;

        case "dice":
            expression = `${evalCalc(obj.quantity)}d${evalCalc(obj.sides)}`;
            //Write the dice notation for the prompt.
            var input = prompt(`Roll ${expression} and enter the result`);
            //Prompt the player to roll the dice and input the raw result.
            value = input;
            if(input == ""){
                //If there is a problem with the input, then simulate a roll.
                var roll = 0;
                for(i=0;i<obj.quantity;i++){
                    roll += Math.round((obj.sides-1)*Math.random())+1;
                    //Generate a random integer from 1 to the number of dice sides.
                }
                value = roll;
            }
            break;

        case "variable":
            var symbol = (obj.hasOwnProperty("symbol")) ? obj.symbol : "X";
            value = prompt(`Input a value for ${symbol}`);
            //Prompt the user to input the variable's value.
            if(obj.hasOwnProperty("min")&&value < obj.min){
                alert(`Specified value of ${symbol} must be at least ${obj.min}`);
                value = evalCalc(obj);
            } else if(obj.hasOwnProperty("max")&&value > obj.max){
                alert(`Specified value of ${symbol} must be at most ${obj.max}`);
                value = evalCalc(obj);
            }
            //If the input value is less than the min or more than the max, then try again.
            break;

        case "exp":
            expression = "EXP";
            //If the the calculation is an experience value, just write "EXP".
            break;

        case "ability":
            value = $(`.ability.modifier[name="${obj.ability}"]`)[0].value;
            break;

        case "skill":
            value = $(`.skill.bonus[name="${obj.skill}"]`)[0].value;
            break;

        case "stat":
            value = $(`.stat[name="${obj.stat}"]`)[0].value;
            break;

        default:
            value = obj;
            /*If the object's type is undefined, then just write the object itself.
            Usually, this is a flat number to be added.*/

    }

    if(!obj.hasOwnProperty("action")){
        obj.action = undefined;
    }

    var scalar = (obj.hasOwnProperty("scalar")) ? obj.scalar : 1;
    //If a scalar is not specified, then just multiply by 1.
    scalar = (Array.isArray(scalar)) ? scalar[0]/scalar[1] : scalar;
    //Fractional scalars are specified as an array of [numerator, denominator].
    value *= scalar;


    /*If the "floor", "ceil", or "round" actions are specified in the calculation,
    use them.*/
    switch(obj.action){
        case "floor":
            value = Math.floor(value);
        break;

        case "ceil":
            value = Math.ceil(value);
            break;

        case "round":
            value = Math.round(value);
            break;
    }

    return value;
}
