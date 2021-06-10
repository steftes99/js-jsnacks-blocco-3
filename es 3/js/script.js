// Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].




function mixArray(arr1, arr2, n1, n2, arr3){
    var a = 0, b = 0, c = 0;
    
    while(a < n1 &&  b < n2)    {
        arr3[c++] = arr1[a++];
        arr3[c++] = arr2[b++];
    }
    while (a < n1)
    arr3[c++] = arr1[a++];

    while (b < n2)
        arr3[c++] = arr2[b++];
}

var arr1 = ['a', 'b', 'c'];
var n1 = arr1.length;
var arr2 = [1, 2, 3];
var n2 = arr2.length;

var arr3 = [];
 mixArray(arr1, arr2, n1, n2, arr3);
 console.log(arr3);