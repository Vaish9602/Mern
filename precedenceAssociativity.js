//==================Precedence and Associativity ====================/
/*     #in precedence Rule
  -()
  -**
  -* /
  -+ -
    # in associativity
    -()left to right
    - ** right to left
    -  *-/left to right
    - +- left to right */

// #Arithmetic Operators
console.log(10 + 20 * 3); // first solve multiplication then add


console.log((10 + 20) * 3); // first solve brackets then multiply

console.log(100 / 10 * 5); // first division because of associtivity rule left to right then multiply

console.log(100 / (10 * 5)); // first solve brackets precedence rule then division

console.log(2 ** 3 ** 2); // power rule in associvity in right to left 

// #Increment & Decrement
let a = 5;
console.log(a++ + ++a); // first post then pre 
/*Left operand a++ (post-increment)
-Contributes 5 (old value)
-Then a becomes 6
-Right operand ++a (pre-increment)
-a becomes 7, contributes 7
-Sum: 5 + 7 = 12
-Printed: 12
-End: a = 7
*/


let b = 5;
console.log(++b + b++);
/*-Start: b = 5
-Left operand ++b (pre-increment)
-b becomes 6, contributes 6
-Right operand b++ (post-increment)
-Contributes 6 (current value)
-Then b becomes 7
-Sum: 6 + 6 = 12
-Printed: 12
-End: b = 7*/
let c = 5;
console.log(c++ + c++);
/*first left operand c++
- contribute current value 5
- then become its 6 
-then Right operand
-contribute with 6
-the then become 7
- sum = 5+6 =11
- end c =7*/


let d = 5;
console.log(++d + ++d);
/* first left side operand
- start with d= 5
- becomes 6
- contribute 6
- then right side operand
- 7 becomes 
- contribute 7
- sum =6+7 = 13
end d=7 */
// Q1
let x1 = 5;
console.log(x1++ + ++x1);
/*first left side operand
- post increament
-contribute with 5
-becomes 6
- then right operands
-becomes 7
-contribute 8
 sum = 5+8=13
 end =8*/

// Q2
let x2 = 5;
console.log(++x2 + x2++ + x2);
/*- first left side
- becomes 6
-contribute 6
-rightside operand 
-contribute 6
-becomes 7
- then addition
sum = 6+6+5=17
x2 =7

*/

// Q3
let x3 = 10;
console.log(x3-- + --x3); 
/* first left side operand 
- start with 10 
- becomes decrement 9
-right side operand
-contribute  value 9 
- then becomes 8
sum = 9+9 =18
x3= 8*/

// Q4
let x4 = 8;
console.log(--x4 + x4--);
/*first left side operand
-start with 8
- becomes 7
- right side operand 
- contribute 7
-then becomes 6
-sum =7+7=14
-end x4 =6
*/

// Q5
let x5 = 3;
console.log(x5++ + x5++ + ++x5);
/*firt left side operand
-contribute 3
-becomes 4
-then right side operands 
-contribute with 4
-becomes 5
-then pre increment
-becomes 6
-contribute with 6
sum=3+4+6=13
end x5= 6
*/



// Q6
let x6 = 7;
console.log(++x6 + ++x6 + x6++);
// ans =26
// x6=10
// Q7
let x7 = 4;
console.log(--x7 + --x7 + x7--);
//x7
// Q8
let x8 = 6;
console.log(x8++ + --x8 + ++x8);

// Q9
let x9 = 9;
console.log(x9-- + x9-- + --x9);

// Q10
let x10 = 2;
console.log(++x10 + x10++ + --x10);

// Q11
let x11 = 11;
console.log(x11-- - --x11);

// Q12
let x12 = 12;
console.log(--x12 - x12--);

// Q13
let x13 = 5;
console.log(x13++ - ++x13);

// Q14
let x14 = 15;
console.log(++x14 - x14++);

// Q15
let x15 = 20;
console.log(x15-- - --x15 - x15--);

// Q16
let x16 = 6;
console.log(x16++ * ++x16);

// Q17
let x17 = 4;
console.log(++x17 * x17++);

// Q18
let x18 = 10;
console.log(x18-- * --x18);

// Q19
let x19 = 3;
console.log(++x19 * x19--);

// Q20
let x20 = 5;
console.log(x20++ + ++x20 * --x20);