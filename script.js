// - Il software riceve in input un lungo testo e una serie di parole
// da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un "badword index" calcolato come il numero di
// parole censurate su il numero di parole totali

// mi creo un array con le parole da censurare
var array = ['non','ciao','chiamo']
// faccio inserire il testo all'utente
var fraseUtente = prompt('inserisci una frase');
// cerco nel testo se ci sono parole da censurare
for (var i = 0; i < array.length; i++) {

  if (fraseUtente.includes(array[i])) {

    fraseUtente = fraseUtente.replace(array[i], 'xxx');

  }

}

console.log(fraseUtente);
