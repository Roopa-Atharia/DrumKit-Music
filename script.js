var num = document.querySelectorAll(".drum").length;

for(var i=0; i<num;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);
    
});
}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    makeAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio ("images/Sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a": 
             var tom2 = new Audio("images/Sounds/tom-2.mp3");
             tom2.play();
             break;
        case "s":  
             var tom3 = new Audio("images/Sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d": 
             var tom4 = new Audio("images/Sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var snare = new Audio("images/Sounds/snare.mp3");
            snare.play();
        break;
        case "k": 
        var crash = new Audio("images/Sounds/crash.mp3");
        crash.play();
        break;
        case "l": 
        var kickbass = new Audio("images/Sounds/kick-bass.mp3");
        kickbass.play();
        break;
        default: console.log(buttonInnerHTMl);
    }
}
function makeAnimation(currentKey){
     var activeButton = document.querySelector("."+currentKey);
     activeButton.classList.add("pressed");
     setTimeout(function(){
        activeButton.classList.remove("pressed");
     }, 100 );
}
