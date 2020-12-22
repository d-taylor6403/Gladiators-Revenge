//window.alert("this is an alert! JavaScript is running!")

//window prompt to obtain Robot name

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;


//Console log all three variables to check the status
console.log(playerName, playerHealth, playerAttack);

//PC Robot
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//This creates a function name "fight"

var fight = function() {
    window.alert("Welcome to Gladiator's Revenge!")
};

fight();