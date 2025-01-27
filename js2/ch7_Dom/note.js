document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";
document.getElementById('tirth').firstElementChild.style.color = "blue";
document.getElementById('tirth').lastElementChild.style.color = "blue";

let a =document.getElementsByTagName('li')[0]
a.style.backgroundcolor = "cyan";
console.log(a)

Array.from(doc.getElementsByTagName('li')).forEach((element) =>{
    element.style.background = "cyan";
});
