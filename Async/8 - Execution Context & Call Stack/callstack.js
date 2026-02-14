var a;
function one() {
    var x = 10;
    two();
}

function two() {
    three();
}
function three() {
    let a = 10;
    four();
}
function four() {
    console.log(a)
    console.log("completed")
    let b = 10;
    function five() {
        console.log(b)
    }
    five();
}

one();


// call stack order - last in first out
// gloabal execution context load
//     one - 
//         two
//             three
//                 four
//                     five

// pop out

// five remove 
//     four
//         three
//             two
//                 one


// function recursive() {
//     recursive();
// }

function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}

factorial(3);



//✅ Debounce

// Wait until user stops, then run.

//Throttle
//Run every few seconds while user keeps doing it.
//

//
// call stack order - last in first out

//Hoisting = Declaration first, execution later.
//TDZ is the period where a let or const variable is hoisted but cannot be accessed before initialization.