let arr = [5,4,9,10,11,50];
let arr2 = ["tirth","shubham","tej","chiku"];
// arr.pop();
// arr.push(20);
// arr.shift();
// delete arr[0];

// console.log(arr.join("-"));
// console.log(arr.toString());
// console.log(arr.sort());
// console.log(typeof(arr));

// arr.splice(3,1,10,10,20);
// arr.slice(2,1);

// console.log(arr);


// 
for(let i=0;i<arr.length;i++){
  console.log(arr[i]);
  
}
console.log("   ")


// for ... of
for(let i of arr){
  console.log(i);
}
// for ... in
for(let i in arr){
  console.log(i);
}

// for each loop
arr.forEach((Element) =>{
  console.log(Element * Element)
});

// Arrray.from
let name = "tirth";
let arr3  =  Array.from(name);
console.log(arr3);
