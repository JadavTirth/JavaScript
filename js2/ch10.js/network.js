// fetch api
let a = fetch( "https://goweather.herokuapp.com/weather/Ny");
a.then((Response)=>{
   console.log(Response.status)
     console.log(Response.ok)
     console.log(Response.headers)
   return Response.text();
})
a.then((Response)=>{
   console.log(Response)
})


