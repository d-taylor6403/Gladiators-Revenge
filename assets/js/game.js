//window.alert("this is an alert! JavaScript is running!")

//Game States
//"WIN" - Player robot has defeated all enemy-robots
//  *Fight all enemy-robots
//  *Defeat each enemy-robot

//"LOSE" - Player robot's health is zero or less

//"PLAY AGAIN"- Player robot has defeated all enemy-robots or Player robot has died
// *display alert asking to play again
// *If 'yes', call fight function again
// *If 'no' break out;

//"VISIT SHOP"- after player defeats an enemy robot or skips and enemy robot, alert to visit shop
// *display shop options

//function to hand case mismatch for fight or skip
var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    promptFight = promptFight.toLowerCase();
    console.log(promptFight);

    // Enter the conditional recursive function call here!
    //Conditional Recursive Function Call
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerInfo.playerMoney = playerInfo.money - 10;
            
            //return true if player wants to leave
            return true;
        }
        return false;
    }
}




//This creates a function name "fight"

var fight = function(enemy) {
    while (playerInfo.health > 0 && enemy.health > 0) {
        // ask player if they'd liked to fight or run
        //ask player if they'd like to fight or skip user fightOrSkip
        if (fightOrSkip()){
            //if true, leave fight by breaking loop
            break;
        }


        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 5, playerInfo.attack)
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + ' attacked ' + enemy.name + ' with a damage of ' + damage + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
        );

        // check enemy's health

        if (enemy.health <= 0) {
            window.alert(enemy.name + ' has died!');

            // award player money for winning
            playerInfo.money = playerInfo.money + 20;

            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
        }

        // remove players health by subtracting the amount set in the enemy.attack variable
        var damage = randomNumber(enemy.attack - 5, enemy.attack)
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name + ' attacked ' + playerInfo.name + ' with a damage of ' + damage + ". " + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
        );

        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + ' has died!');
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
        }
    }
};


//Function to start new game
var startGame = function() {
    //reset player stats
    playerInfo.reset

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            // let player know what round they are in
            window.alert('Welcome to Robot Gladiators Round ' + (i + 1) + '!');
            //pick new enemy to fight based on the array
            var pickedEnemyObj = enemyInfo[i];

            //reset enemyHealth before starting new fight
            pickedEnemyObj.health = randomNumber(10, 100);

            //debugger to pause script 
            //debugger;

            //call fight function with enemy-robot
            fight(pickedEnemyObj);

            //To check if there are more enemies to fight and the player is still alive which will activate the shop
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                //ask player if they would like to enter the shop
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                //if 'yes' call store function
                if (storeConfirm) {
                    shop();
                }
            }

        } else {
            window.alert('You have lost your robot in battle! Game Over!');
            break;
        }
    }
    //play again
    endGame();
};

//function to end entire game
var endGame = function() {
    //if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    };

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};


//Building player shop
var shop = function() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    //Switch statement to handle shop options
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            playerInfo.refillHealth();
            break;

        case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack();
            break;

        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");

            //call shop function again to force player to pick a valid option
            shop();
            break;
    }
};

//function to generate random value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

//Function to handle null or blank player name entry
var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?")

        console.log("Your robot's name is " + name);
        return name;
    }
};


//window prompt to obtain Robot name
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's health by 20 for $7.00.")
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for $7.00.")
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    }
};

//Console log all three variables to check the status
console.log(playerInfo.name, playerInfo.health, playerInfo.attack);

//PC Robot
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];


//Start the game when the page loads
startGame();