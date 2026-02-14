/*Call Stack → Executes code

Web APIs → Handles async work (timer, fetch, etc.)

Callback Queue / Microtask Queue

Event Loop → Moves tasks to stack when it’s empty */


/**Order Priority

Call Stack

Microtask Queue (Promises)

Callback Queue (setTimeout) */

// first in first out
function first(){
    console.log("a");
    
}
function second(){
    console.log("b");
    
}
function third(){
    setTimeout(()=>{
        console.log("c")

    },0);
}
function fourth(){
    Promise.resolve().then(()=> console.log("d"));
    
}
function fifth(){
    Promise.resolve().then(()=> console.log("e"));
    
}
function sixth(){
    setTimeout(()=>{
        console.log("f")

    },0);
}
sixth();
fifth();
fourth();
third();
second();
first();







function infiniteFn(){
    Promise.resolve().then(infiniteFn);

}
//microtask starvation
function timer(){
    setTimeout(()=>{
        //this function will never never e called since microtask  queue will
       // never be empty event loop will ignore this since its priority is low
        console.log("will never be executed")
    },0);
}
//infiniteFn();
//timer();

/**task queue callbacks-setTimeout,setInterval ,DOM event-click scroll,input ,submit etc.box
 * microtask
 */