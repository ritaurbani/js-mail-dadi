


// dichiarazioni di variabili
let highestNumber;
let message;
// business logic

// math.randoma genera numeri da 0 a 1
// * 100 sposta virgola a destra di 2 cifre
// math.floor arrotonda per difetto 
// +1 numero che non e' 0 
// % 6 ==> resto divisione per 6 compreso tra 0 e 5 

const playerNumber = Math.floor(Math.random()*100) % 6 +1; 
const computerNumber = Math.floor(Math.random()*100) % 6 +1;
    
if (playerNumber > computerNumber) {
    highestNumber = playerNumber
    message = 'player has highest number'
} else if (playerNumber < computerNumber) {
    highestNumber = computerNumber
    message = 'computer has highest number'
} 

// output
console.log(message)
console.log(highestNumber)