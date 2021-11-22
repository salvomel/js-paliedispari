// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedere all’utente di inserire una parola
let userWord = prompt ('Inserisci una parola');

// Variabile che richiama la funzione 
let palindromeWord = palindromeOrNot(userWord);

// VERIFICO CON IF SE PALINDROMA O NO
if( userWord === palindromeWord ) {
    alert('La parola è palindroma');
} else {
    alert('Non è palindroma');
}

// FUNCTION
// wordToCheck: parola da valutare
// return: la parola palindroma
function palindromeOrNot(wordToCheck) {

    let palindromeWord = '';
    
    for (let i = wordToCheck.length - 1; i>=0; i--) {
        palindromeWord += wordToCheck[i];
        console.log(palindromeWord);
    }

   return palindromeWord;
}