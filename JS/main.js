/* Richiesta dati utente */
const km = parseFloat(prompt('Quanti chilometri devi percorrere?'));
const eta = parseInt(prompt('Qual è l*età del passeggero?'));

console.log(`Kilometri inseriti: ${km}`);
console.log(`Età inserita: ${eta}`);

/* Calcolo prezzo base*/
const prezzoBase = km * 0.21;

/* Prezzo finale con sconti */
let prezzoFinale;
if (eta < 18) {

 /* Sconto 20% per minorenni */
 prezzoFinale = prezzoBase * 0.8;
} else if (eta >= 65) {

/* Sconto 40% per over 65 */
prezzoFinale = prezzoBase * 0.6;
} else {

/* Nessuno sconto  */
 prezzoFinale = prezzoBase;
}

/* Max 2 decimali */
prezzoFinale = prezzoFinale.toFixed(2);

/* Prezzo Finale in console/visibile all'utente */
console.log(`Prezzo finale del biglietto: €${prezzoFinale}`);
alert(`Prezzo finale del biglietto: €${prezzoFinale}`);