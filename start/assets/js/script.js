/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto 'persona' con: nome, cognome, eta, citta.
   Stampa: 'Mario Rossi, 25 anni, vive a Roma.'
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const persona = {
   'nome': 'Mario',
   cognome: 'Rossi',
   eta: 34,
   citta: 'Roma'
};
console.log(`${persona.nome} ${persona.cognome}, ${persona.eta} anni, vive a ${persona.citta}`) ;
/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto 'persona': aggiungi 'email', poi rimuovi 'eta'.
   Stampa l'oggetto risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
persona.email = 'MarioRossi@gmail.com';
delete persona.eta;
console.log(persona);
/* ESERCIZIO 3 — Oggetto annidato
   Oggetto 'utente' con una proprietà 'indirizzo' (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const utente = {
   indirizzo: {
      via: 'Vaglio',
      citta: 'Roma',
      cap: '00118'
   }
};
console.log(`cap dell utente: ${utente.indirizzo.cap}`);

/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto 'persona', variabile chiave = 'nome'.
   Stampa il valore con bracket notation usando la variabile chiave.
*/


let chiave = 'nome';
console.log(persona[chiave]);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa 'Pareggio'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 17;
let num2 = 18;
let num3 = 19;

if(num1 > num2 && num1 > num3){
   console.log(num1)
} else if (num2 > num1 && num2 > num3){
   console.log(num2)
} else if (num3 > num2 && num3 > num1) {
   console.log(num3)
} else if (num3 === num1 && num3 === num2 && num1 === num2 && num1 === num3 && num2 === num1 && num2 === num3){
   console.log('Pareggio')
};
/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile 'totale'.
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: 'Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€'
   Risolvi una volta con if/else e una volta con ternario.
*/
let totale = 35;
let costoSpedizione = 9.90;
if (totale >= 50){
   console.log(`Totale carrello: ${totale}€ — Spedizione: 0€ — Totale finale: ${totale}`)
} else {
   console.log(`Totale carrello: ${totale}€ — Spedizione: ${costoSpedizione}€ — Totale finale: ${totale + costoSpedizione}€`)
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, 'ciao', true]).
   Con un for + if, per ogni elemento stampa 'x è un numero' o 'x non è un numero'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const myArray = [42, 'ciao', true]


//    if(myArray[0] === Number){
//       for ( i = 0; 1 < 3; i++)
//       console.log('il ${myArray[0] e un numero}')
//    }



/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const mioArray = [];

mioArray.push(1,2,3,4,5);
console.log(`array: ${mioArray} ed e lungo ${mioArray.length}`);

/* ESERCIZIO 9 — Carrello con splice
   Array ['Penna', 'Quaderno', 'Zaino', 'Astuccio'].
   Con splice: rimuovi 'Quaderno', poi inserisci 'Diario' al suo posto.
   Stampa dopo ogni operazione.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const arrayScuola = ['Penna', 'Quaderno', 'Zaino', 'Astuccio'];
console.log(`array: ${arrayScuola}`)
arrayScuola.splice(1,1,'Diario');
console.log(`sostituzione Quaderno: ${arrayScuola}`);

/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ['Penna', 'Quaderno', 'Zaino'].
   cercato = 'Zaino'.
   Con includes: stampa 'Zaino è in carrello: true'.
   Con indexOf: stampa la posizione, o 'Non in carrello'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const arrayProdotti = ['Penna', 'Quaderno', 'Zaino']
 const carrello = ['Zaino']
console.log(`il prodotto: ${arrayProdotti[2]}    disponibilita: ${carrello.includes('Zaino')}`)


   console.log(`posizione prodotto: ${arrayProdotti.indexOf('Zaino')} presente nell arrayProdotti: ${arrayProdotti.includes('Zaino')}`)
    

/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: 'Mario (25 anni)'.
   Aggiungi console.table(utenti) alla fine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → 'OFFERTA: nome (prezzo€)'
   - disponibile && prezzo >= 10 → 'nome — prezzo€'
   - !disponibile → 'nome — esaurito'
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array 'inverso', riempilo con un for (dall'ultimo al primo) usando push.
   Stampa 'inverso'.
   Vincolo: niente metodo .reverse() di JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
