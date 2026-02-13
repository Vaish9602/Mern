//right triangle
/*

*
**
***
****
*****




*/
console.log("right angle triangle");
let n=5;
for(let i=1;i<=n;i++){
    let row= '';
    for(let j=1;j<=i;j++){
        row+="*";
    }
    console.log(row)
}

/*
Inverted Right Triangle
*****
****
***
**
*



*/

console.log("inverted right triangle")
n=5;
for(let i=n;i>=1;i--){
    let row="";
    for(let j=1;j<=i;j++){
        row+="*"
    }
    console.log(row)
}

/*
Square Pattern
*****
*****
*****
*****
*****

*/
console.log("Square Pattern");
n=5;
for(let i=1;i<=n;i++){
    let row='';
    for(let j=1;j<=n;j++){
        row+='*';
    }
    console.log(row)
}

/*

Pyramid (Centered)
    *
   *** //2*i-1
  *****  |
 *******
*********



*/
console.log('Pyramid (Centered)');
n=5;
for(let i=1;i<=n;i++){
    let row='';
    for(let j=1;j<=n-i;j++){
        row+=' ';
    }
    for(let k=1;k<2*i-1;k++){
        row+='*';
    }
    console.log(row)
}

/*
Inverted Pyramid
*******
 *****
  ***
   *


*/
console.log("Inverted pyramid");
n=5;
for(let i=n;i>=1;i--){
    let row='';
    //spaces
    for(let j=1;j<=n-i;j++){
        row+=' ';
    }
    //star
    for(k=1;k<2*i-1;k++){
        row+='*'
    }
    console.log(row)
}

/*
Increasing Number Triangle
1
12
123
1234
12345




*/
console.log("Increasing Number Triangle")
n=5;
for(let i=1;i<=n;i++){
    let row='';
    for(let j=1;j<=i;j++){
        row+=j;
    }
    console.log(row)

}

/*

Same Number Triangle
1
22
333
4444
55555


*/
console.log("Same Number Triangle")
n=5;
for(let i=1;i<=n;i++){
    let row='';
    for(let j=1;j<=i;j++){
        row+=i;
    }
    console.log(row)
}
/*
Reverse Number Triangle
1234
123
12
1


*/
 n = 4;
for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}

/*Continuous Number Triangle
1
23
456
78910
 */
 n = 4;
let num = 1;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += num;
        num++;
    }
    console.log(row);
}
