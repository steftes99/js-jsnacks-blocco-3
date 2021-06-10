// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

var numeri = [1, 4, 87, 11, 32, 34, 87, 90];

var a = parseInt(prompt('inserisci un numero minimo 1 massimo ' + numeri.length));
var b = parseInt(prompt('inserisci un numero massimo 8' + numeri.length));

while(a > b || b > numeri.length){
    alert('attenzione, a deve essere minore di B');
     a = parseInt(prompt('inserisci un numero minimo 1 massimo ' + numeri.length));
     b = parseInt(prompt('inserisci un numero massimo ' + numeri.length));
}

function filtro(array, min, max){
    var numeriFiltrato = [];
    for(var i = min - 1; i < max; i++){
        numeriFiltrato.push(array[i])
    }
    return numeriFiltrato;
        
}

filtro(numeri, a, b);
console.log(filtro(numeri, a, b));