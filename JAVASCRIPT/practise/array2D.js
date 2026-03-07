//A 2D array = array inside array (matrix)
//Print 2D Array
let arr = [
 [1,2,3],
 [4,5,6],
 [7,8,9]
];

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        console.log(arr[i][j]);

    }
}

//Print Matrix Format
arr = [
 [1,2,3],
 [4,5,6],
 [7,8,9]
];

for(let i=0;i<arr.length;i++){
    let row="";
    for(let j=0;j<arr[i].length;j++){
        row+=arr[i][j]+ " ";

    }
    console.log(row);
}


//Sum of All Elements
/*Row 0
[1,2,3]

Add each element

sum = 0 + 1 = 1
sum = 1 + 2 = 3
sum = 3 + 3 = 6
Row 1
[4,5,6]
sum = 6 + 4 = 10
sum = 10 + 5 = 15
sum = 15 + 6 = 21
Row 2
[7,8,9]
sum = 21 + 7 = 28
sum = 28 + 8 = 36
sum = 36 + 9 = 45 */
arr = [
 [1,2,3],
 [4,5,6],
 [7,8,9]
];
let sum =0;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        sum+=arr[i][j];
    }
    
}
console.log(sum)

//Sum of Each Row
/*Row1 → 1+2+3 = 6
Row2 → 4+5+6 = 15
Row3 → 7+8+9 = 24 */
for(let i=0;i<arr.length;i++){
    let sum=0;
    for(let j=0;j<arr[i].length;j++){
        sum+=arr[i][j];
    }
    console.log(sum);
}

//Print Column Wise
for(let i=0;i<arr[0].length;i++){
    let col="";
    for(let j=0;j<arr.length;j++){
        col+=arr[j][i]+ " ";

    }
    console.log(col)
}

//Sum of Each Row
for(let i=0;i<arr.length;i++){
    let rowSum=0;
    for(let j=0;j<arr[i].length;j++){
        rowSum+=arr[i][j]
    }
    console.log(rowSum)
}
// Sum of Each Column

/* Column1 → 1+4+7 = 12
Column2 → 2+5+8 = 15
Column3 → 3+6+9 = 18*/
 for(let i=0;i<arr.length;i++){
    let colSum=0;
    for(let j=0;j<arr[0].length;j++){
   
        colSum+=arr[j][i];

    }
    console.log(colSum)

}

//Primary Diagonal
/*1
 5
   9 */
for(let i=0;i<arr.length;i++){
    console.log(arr[i][i])
}

//Secondary Diagonal
/*   3
 5
7 */
let n=arr.length;
for(let i=0;i<n;i++){
    console.log(arr[i][n-i-1]);
}

//Reverse Rows
/*Original
1 2 3
4 5 6
7 8 9

Reverse Rows
3 2 1
6 5 4
9 8 7 */
for(let i=0;i<arr.length;i++){
    console.log(arr[i].reverse());
}

//Transpose Matrix
/*Original
1 2 3
4 5 6
7 8 9

Transpose
1 4 7
2 5 8
3 6 9 */
for(let i=0;i<arr.length;i++){
    let row="";
    for(let j=0;j<arr.length;j++){
        row+=arr[j][i]+ " ";
    }
    console.log(row)
}

//Largest Element in Matrix
let max=arr[0][0];
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]>max){
            max=arr[i][j];
        }
    }
}
console.log("largest",max)