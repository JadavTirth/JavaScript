setTimeout(() => {
    console.log(`hello \nworld`)
 
 }, 2000)
 
 let arr = [20, 40, 30]
 
 function sum(a, b, c) {
    return ((a + b + c) / arr.length)
 }
 console.log(sum(...arr));
 
 
 
 //    function p(sec) {
 //       this.sec = new sec
 //       let a = Promise((resolve, reject) => {
 //          resolve(20)
 //       })
 //       setTimeout(() => {
 //          console.log(resolve)
 //       }, this.sec)
 
 
 //    }
 
 // p(2000)
 
 function p(sec) {
    this.sec = sec; 
    let a = new Promise((resolve, reject) => {
       resolve(20); 
    });
 
    setTimeout(() => {
       a.then((result) => {
          console.log(result); 
       });
    }, this.sec);
 }
 
 
 p(3000);
 
 
 class calcy {
    add(a,b){
       return a+b;
       
    }
    multi(a,b){
       return a*b;
 
    }
    div(a,b){
       return a/b;
 
    }
    sub(a,b){
       return a-b;
 
    }
 }
 let b = new calcy
 
 console.log(b.add(5,20))




//  ________________________________________________as a harry 
 
const a = async(text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(text);
        })

    })
   
} 
(
   async ()=>{

        let text = await a("hello")
        text = await a("world!!")
    }
)()