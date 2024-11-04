

// dichiarazioni di variabili
const userEmail = prompt("inserisci la tua email")
const myList = ["anna@gmail.com", "beatrice@gmail.com", "chiara@gmail.com", "daria@gmail.com"];
let isFound = false; // boolean

// business logic
for (let i = 0; i < myList.length; i++) {
    const currentEmail = myList[i];
    if (userEmail === currentEmail) {
        isFound = true;
    }
}

// output
if (isFound === true) {
    console.log("la mail di " + userEmail + " è stata trovata, Login effettuato!");
} else {
    console.error("Non puoi accedere");
}

/////////////////// Opzione 2 ////////////////////////

const userEmail = prompt("inserisci la tua email", "beatrice@gmail.com") // beatrice
const myList = ["anna@gmail.com", "beatrice@gmail.com", "chiara@gmail.com", "daria@gmail.com"];
let message = 'non e presente'

// business logic
for (let i = 0; i < myList.length; i++) {
    const currentEmail = myList[i];
    if (userEmail === currentEmail) {
        message = "e'presente"
    } 
}
 console.log(message) //stampa l ultimo valore assegnato alla variabile message