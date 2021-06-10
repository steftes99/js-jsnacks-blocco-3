// Scrivi una funzione capitalize che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo
var parola = prompt('Inserisci una parola');


function capitalize(){
    
    
    return parola.charAt(0).toUpperCase() + parola.slice(1);
    
    
    
}
capitalize();
console.log(capitalize());

