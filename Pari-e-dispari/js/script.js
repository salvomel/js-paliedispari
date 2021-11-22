// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto

// Scelte utente
const userEvenOrOdd = prompt ('Scegli pari o dispari');
const userNumber = parseInt (prompt ('Scegli un numero da 1 a 5')) ;
console.log(userNumber);

// Genero numero per PC richiamando la funzione
const pcNumber = randomNumber();
console.log(pcNumber);

// Sommo i numeri
let sum = userNumber + pcNumber;
console.log(sum);

// Richiamo funzione pari o dispari per la somma
let whoWins = evenOrOdd(sum);

// IF per stabilire chi ha vinto
if( whoWins === 'pari' && userEvenOrOdd === 'pari') {
    alert('Hai vinto');
} else {
    alert('Hai perso');
}

// FUNCTIONS
// Funzione per numero casuale
function randomNumber() {
    return Math.floor(Math.random() * 5) + 1;
  }


// Funzione per pari o dispari
function evenOrOdd (number) {
    let result;

    if (number % 2 === 0) {
        result = 'pari'
    } else {
        result = 'dispari'
    }

    return result;
}  
