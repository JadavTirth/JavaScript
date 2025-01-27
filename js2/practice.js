function loadscript(src , callback){
    var script = document.createElement("script")
    script.src = src;
    script.onload = function(){
        console.log("scripted")
    }
    document.body.appendChild(script);
    script.onerror = function(){
        callback(new Error("some error accors"));
    }

    callback(null, src);

}

function hello (error,src){
    if(error){
        alert("some error define")
    }
    alert(" hello")
}

loadscript("https://code.jasdasdquery.com/jquery-3.3.1.slim.min.js" , hello);