let p1 = new Promise((resolve,reject)=>{
    console.log("first")
    setTimeout(()=>{
      console.log("second");
       resolve(5)
    },2000)
    
  });
  
  p1.then((value)=>{
    console.log("second")
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        console.log("third")
        console.log(value)
      },2000)
      
    })
  }).then((value)=>{
    console.log(value)
    console.log( "fourth")
    
    return 2;
  }).then((value)=>{
    console.log("fifth")

  })


//   promise chaining


const loadScript = (src) => {
    return new Promise((resolve, reject) => {
            let script = document.createElement("script")
            script.type = "text/javascript"
            script.src = src
            document.body.appendChild(script)
            script.onload = (script) => {
                    resolve("Script has been loaded sir")
            }
            script.onerror = () => { reject(0) }
    })
}

let p5 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
p5.then((value) =>{
console.log(value)
return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
}).then((value) =>{
console.log("Hello")

}).catch((error)=>{
console.log("some erroe occurs")
})


// promise api

let p6 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve("value 1")
    },1000)
  })
  let p2 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      // resolve("value 2")
      reject(2)
    },1000)
  })
  let p3 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve("value 3")
    },1000)
  })
  
  let promise_all = Promise.all([p6,p2,p3])
  // let promise_all = Promise.race([p1,p2,p3])
  // let promise_all = Promise.allSettled([p1,p2,p3])
  
  
  promise_all.then((value)=>{
    console.log(value)
  })

  // aync await function

  console.log("heyy ch9");

async function jadav() {
  let a = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 first");
    }, 2000);
  });

  let b = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("28 second");
    }, 5000);
  });

  console.log("await a");
  let a1 = await a;
  console.log("a " + a1);

  console.log("await b");
  let b1 = await b; 
  console.log("b " + b1);

  return [a1, b1];
}

// jadav().then((result) => {
//   console.log("Result: ", result);
// });

const charry = async() =>{
   console.log(" am charry")
}

const main = async() =>{
   console.log("main function")
   let a2 = await jadav()
   let b2 = await charry()
}
main();


//  throw errror

console.log("throw error")
let a = prompt("enter number")
try {
   if(a>20){
      
   throw new ReferenceError ("this is throw error")
   }
}
catch (error){
   console.log("error found!!!!")
   console.log(error.name)
   console.log(error.messge)
   console.log(error.stack)
}
finally{
   console.log("finally")
}