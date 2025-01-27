function loadscript (src , callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
        console.log("scripted" + src)
    }
    document.body.appendChild(script);
    callback(null, src);
    script.onerror = function(){
      console.log("error loading script with src" + src);
      callback(new Error("src some error"))
    }
  }
  
  loadscript("https://code.jasdquery.com/jquery-3.3.1.slim.min.js" , hello)
  
  function hello (error,src){
    if(error){
      console.log(error);
      return;
    }
    alert("hello 12345"+ src);
  }
  
  function heyy (){
    alert("heyy");
  }   
  