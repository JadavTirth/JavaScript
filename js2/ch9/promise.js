let p1 = new Promise (function(resolve, reject){
    console.log("p1 is pending")
    setTimeout(()=>{
      resolve(true);
      console.log("i am p1")
    },5000);
  })
  
  let p2 = new Promise (function(resolve, reject){
  console.log("p2 is pending")
    setTimeout(()=>{
     reject(new Error("I am error"))
    },5000);
  })
  
  
  p1.then((value)=>{
    console.log(value);
  })
  
  // p2.catch((error)=>{
  //   console.log("error catch")
  // })
  
  p2.then((value)=>{
    console.log(value)
  },(error)=>{
    console.log(error)
  })