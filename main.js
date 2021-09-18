

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


fib();