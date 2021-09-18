var first = BigInt(0);
var second = BigInt(1);
var num = 0;

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

function displayNextFib() { 
    var element = document.getElementById("list");
    var fiblist = fib();

    element.innerHTML = "";

    for (let i = 0; i < 100; i = i + 1) {
        var item = document.createElement("p");
        var text = document.createTextNode("F(" + num + ") = " + fiblist[i].toString());
        item.appendChild(text);
        element.appendChild(item);
        num = num + 1;
    }
}


displayNextFib();
