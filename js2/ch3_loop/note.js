/* 
for loop
for in loop
for of 
while
do while 
*/

let marks = { 
    harry : 50,
    tirth : 10,
    shubham : 50
}
 

for(let i=0; i<=Object.keys(marks).length; i++){
    console.log(Object.keys(marks)[i] +" : "+ marks[Object.keys(marks)[i]])
}

// q2
for(let key in marks){
    console.log(key +" : "+ marks[key])
}

// q3
let a =20;
let i;

while(a != i){
    i = prompt("emter number23")    
}
alert("your kyc not complete")


// q4

let d = prompt("enter number")
let f = prompt("enter number")
let g = prompt("enter number")
let h = prompt("enter number")

let k = d+f+g+h;
console.log(k/4);