//function
function greetUser() {
    console.log("hello world");
}

greetUser();
greetUser();
greetUser();
greetUser();
console.log("bye world");
console.log("bye world");
greetUser();
greetUser();
greetUser();


//
function greetSpecificUser(name) {
    console.log("hello" + name);
}

greetSpecificUser("vaishnavi");
greetSpecificUser("rutu");

//
function showCheckInTime(name, time) {
    console.log("hello " + name + " you checked in at: " + time);
}
showCheckInTime("Mayur", "9pm");
showCheckInTime("shweta", "10am");

//
function welcomeGuest(name, place) {
    console.log("hello " + name + " welcome to our: " + place);
}
welcomeGuest("riya", "app");
welcomeGuest("pratik", "website");
welcomeGuest("Deep", "office");

//
function sum(a, b) {
    const c = a + b;
    return c;
}
const sum1 = sum(1, 4);
const sum2 = sum(13, 4);
const sum3 = sum(1, 40);
console.log({ sum1, sum2, sum3 });

//
function greatestNumber(a, b) {
    if (a > b)
        return a;
    else
        return b;

}
const greatest1 = greatestNumber(4, 3);
const greatest2 = greatestNumber(40, 33);
const greatest3 = greatestNumber(4, 13);
console.log({ greatest1, greatest2, greatest3 });