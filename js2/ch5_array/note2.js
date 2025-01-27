let arr = [20,5,6,80,40];

// Array map method
let a = arr.map((value ,index , Array) =>{
  console.log(value , index ,Array)
  return value + 1;
})
console.log(a);

// array filter
let b = arr.filter((value)=>{
  return value < 20;
});
console.log(b);

// arry reduce method
const reduce_func = (h1 ,h2) =>{
  return h1+h2;
};
let c = arr.reduce(reduce_func)
console.log(c);