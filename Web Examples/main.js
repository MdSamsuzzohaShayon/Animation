 // $("button").on("click", function(){
 //     $(this).closest("li")
 //     .find(img)
 //     .clone()
 //     .addClass("zoom")
 //     .appendTo("body");
 //     setTimeout(function(){
 //         $(".zoom").remove();
 //     }, 1000);
 // });

//  var x = document.forms["frm1"];
//  var text = "";
//  var i;
//  for (i = 0; i < x.length; i++) {
//    text += x.elements[i].value + "<br>";
//  }
//  document.getElementById("demo").innerHTML = text;


 // VANILLA JAVASCRIPT
// let button = document.querySelectorAll('button');
// button.addEventListener('click', buttonClick);

 function buttonClick(e){
     console.log("button click");
     let button = document.getElementsByTagName('button');
     console.log(button);
     for( let i = 0; i<button.length; i++){
        console.log(button[i]);
     }
 }

