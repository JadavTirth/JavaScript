// console.log(document.body.innerHTML)
// console.log(document.body.outerHTML)

// console.log(document.body.textContent)

// first.hidden = false

// console.log(first.dataset)//

// let s = document.getElementById("first");
// s.classList.remove("class")
// console.log(s)



let a = document.getElementsByTagName("section")[0]
let b = a.innerHTML = a.innerHTML + ('beforebegin',"<h1>Hello World</h1>");

// let c = document.getElementById('first')[0];
// c.insertAdjacent('beforebegin', '<p>heyyy </p>');

// console.log(c);
first.insertAdjacentHTML('beforebegin', '<p>beforebegin </p>')
first.insertAdjacentHTML('afterbegin', '<p>afterbegin </p>')
first.insertAdjacentHTML('beforeend', '<p>beforeend </p>')
first.insertAdjacentHTML('afterend', '<p>afterend </p>')

// a.remove();

a.classList.add("class")
a.classList.toggle("class")

// let timeId = setTimeout((v) =>{
// alert("hello")
// },2000);

// let timeId2 = setInterval((v2) =>{
//     alert("bhag bsdk");
// }, 3000 );

btn.onclick = function(v){
    alert("btn ")
}

let x = function(event){
    console.log(event.target);
    console.log(event.type, event.clintX, event.clintY);
}
btn.addEventListener('click' , x);


