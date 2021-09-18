function fib() {
    var a = BigInt(0);
    var b = BigInt(1);
    var fiblist = [];
    fiblist[0] = a;
    fiblist[1] = b;

    console.log(a.toString());
    console.log(b.toString());

    for (let i = 0; i < 98; i = i + 1) {
        var next = a + b;
        a = b;
        b = next; 
        fiblist[i + 2] = next;
        console.log(next.toString());  

    }

    return fiblist;
}
var fiblist = fib()
var avantDernier = fiblist[98];
var dernier = fiblist[99];
var num = 0;

function fibagain() {
    var fiblist = fib();
    var c = avantDernier;
    var d = dernier;
    var fiblist = [];
    fiblist[0] = c + d;
    fiblist[1] = d + fiblist[0];

    console.log(c.toString());
    console.log(d.toString());

    c = fiblist[0];
    d = fiblist[1];
    for (let i = 0; i < 98; i = i + 1) {
        var next = c + d;
        c = d;
        d = next; 
        fiblist[i + 2] = next;
        console.log(next.toString());  
    }
    
    avantDernier = fiblist [98];
    dernier = fiblist [99];

    return fiblist;
}

function displayFib() {
    var element = document.getElementById("list");
    var fiblist = fib();
    
    for (let i = 0; i < 100; i = i + 1) {
        var item = document.createElement("p");
        var text = document.createTextNode("F(" + (num++) + ") = " + fiblist[i].toString());
        item.appendChild(text);
        element.appendChild(item);
    }
}

function displayNextFib() { 
    var element = document.getElementById("list");
    var fiblist = fibagain();
    element.innerHTML = "";
    for (let i = 0; i < 100; i = i + 1) {
        var item = document.createElement("p");
        var text = document.createTextNode("F(" + (num++) + ") = " + fiblist[i].toString());
        item.appendChild(text);
        element.appendChild(item);
    }



}


displayFib();
