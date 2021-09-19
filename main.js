//First and second element for the next Fibonacci sequence
var first = BigInt(0);
var second = BigInt(1);
//Number of the element on the current Fibonacci sequence
var num = 0;

//Returns the next hundred elements of the Fibonacci sequence
function fib() {
    var a = first;
    var b = second;
    var fiblist = [];

    fiblist[0] = first;
    fiblist[1] = second;

    for (let i = 0; i < 98; i = i + 1) {
        var next = a + b;
        a = b;
        b = next; 
        fiblist[i + 2] = next;
        console.log(next.toString());  
    }
    
    first = fiblist[98] + fiblist[99] ;
    second = fiblist[99] + first;

    return fiblist;
}

//Replace the Fibonacci sequence displayed
function displayNextFib() { 
    var element = document.getElementById("list");
    var fiblist = fib();
    
    element.innerHTML = "";

    for (let i = 0; i < 100; i = i + 1) {
        var item = document.createElement("p");
        var text = document.createTextNode("F(" + num + ") = " + fiblist[i].toString());
        item.style.color = generateColor(i);
        item.appendChild(text);
        element.appendChild(item);
        num = num + 1;
    }
}

// Takes i (a number between 0 and 99) and returns a string which is the color of the "i"th element of a well defined and beautiful gradient
// NOTE : currently, the color of the background gradient conflicts with the color of the text in the midle of the list.
 function generateColor(i) {
    var c = i/99;
    var color = Math.round(255*c);
    var text = "rgb(" + color + "," + color + "," + color + ") "; 
    console.log(i, text)       
    return text;
    
 }

displayNextFib();
