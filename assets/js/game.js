//window.alert("this is an alert! JavaScript is running!")

//window prompt to obtain Robot name

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


//Console log all three variables to check the status
console.log(playerName, playerHealth, playerAttack);

//PC Robot
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//This creates a function name "fight"

var fight = function() {
    //alert players that they are starting the round
    window.alert("Welcome to Gladiator's Revenge!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    //If player choses to fight, then fight
    if(promptFight === 'fight' || promptFight === 'FIGHT') {
    /*Subtract the value of "playerAttack" from the value of enemyHealth and use that result to update the value in the enemyHealth variable*/
        enemyHealth = enemyHealth - playerAttack;

         /*Log a resulting message to the console so we know that it worked.*/
        console.log(playerName 
        + " attacked" + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    
        //check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        }else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        };

        /* Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.*/
        playerHealth = playerHealth - enemyAttack;
        /* Log a resulting message to the console so we know that it worked.*/
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    
    // check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        } 
        else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    //if player choses to skip
    }else if (promptFight === 'skip' || promptFight === 'SKIP'){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes, leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight! Goodbye!");
            //substract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }else {
            //if no, ask question again by running fight() again
            fight();
        };
        

    }else{
        window.alert("You need to choose 'FIGHT' or 'SKIP'. Try again!");
    }
    
};

fight();