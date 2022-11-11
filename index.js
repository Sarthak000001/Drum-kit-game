// document.querySelector(".drum").addEventListener("click",
// function (){
//     alert("I got clicked");
// });


    //  var audio = new Audio("sounds/tom-1.mp3");
    //  audio.play();


//? detect the which button is press
var n = document.querySelectorAll(".drum").length;

for(var i = 0;  i < n;i++){


    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
           
       var buttonInner = this.innerHTML;
       makesound(buttonInner);

       buttonanimation(buttonInner); //adding animation to button

    });


} //end of for loop

//? detect the which keyboard button is clicked
document.addEventListener("keydown",function(event){ //adding to whole screen
    // alert(event.key);
    makesound(event.key);   

    buttonanimation(event.key);  //adding animation to button
});


function makesound(key){
   
    switch(key){
        case "w":
           var tom = new Audio("sounds/tom-1.mp3");
            tom.play();
         break;
        case "a":
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;
         case "s":
             var tom3 = new Audio("sounds/tom-3.mp3");
             tom3.play();
             break;
         case "d":
             var tom4 = new Audio("sounds/tom-4.mp3");
             tom4.play();
             break;
         case "j":
             var snare = new Audio("sounds/snare.mp3");
             snare.play();
             break;
         case "k":
             var crash = new Audio("sounds/crash.mp3");
             crash.play();
             break;
         case "l":
             var kick = new Audio("sounds/kick-bass.mp3");
             kick.play();
             break;
         
         default:
             console.log(buttonInner);
 
 
        }
} 

function buttonanimation(currentbutton){
    var activebutton = document.querySelector("."+currentbutton);
    activebutton.classList.add("pressed"); //adding the class pressed

    // seting time using settimeout function
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },140);

        
 }