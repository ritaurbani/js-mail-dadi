
//Mail
//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

//Istruzioni
// -inserisco userEmail
// -per ogni email in mylist confronto con userEmail
// -se my list email e'uguale a userEmail stampo messaggio "email e'gia'presente'
// -altrimenti stampo messaggio "email valida"

const userEmail = prompt("inserisci la tua email")

const myList = ["maria@gmail.com", "anna@gmail.com", "sara@gmail.com"]

let message;

for (let i=0; i<myList.length; i++) {
    const currentEmail = myList[i];
    if (userEmail === currentEmail) {
        message = "email presente"    
    } else { 
        message = "email non presente" 
    }console.log(message)

}


