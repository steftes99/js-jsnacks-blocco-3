// Dare la possibilità di inserire due parole. 
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. 
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

function verificaLunghezza(){
    var parola1 = prompt('Inserisci una parola');
    var parola2 = prompt('Inseriscine un\' altra');

    if(parola1.length > parola2.length){
        document.getElementById('risultato').innerHTML = parola1;
    } else if (parola1.length == parola2.length){
        document.getElementById('risultato').innerHTML = parola1 + ' ' + parola2;
    } else {
        document.getElementById('risultato').innerHTML = parola2;
    }
}

verificaLunghezza();