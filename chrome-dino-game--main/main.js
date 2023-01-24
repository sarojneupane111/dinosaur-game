var character = document.getElementById("character");
var result = document.getElementById("result");
var game = document.getElementById("game");
var score = document.getElementById("score");
var count = 0;
var sound = document.getElementById("sound");
var block = document.getElementById("block");
var target = document.querySelector('#block');
var target2 = document.querySelector('#level');
const countDiv = document.querySelector("#count")
let initialAnimationTime=1.5;
target.style["animation-duration"]=initialAnimationTime+"s";

function jump(){
    character.style.top = "110px";
    setTimeout(function(){
        character.style.top = "170px"
    },400);
    sound.play();
    count++
    console.log(count);
    countDiv.textContent = count

    if(count%3===0){
        console.log("level up");
        target2.classList.toggle("level-animation");
        if(initialAnimationTime>0.5){
        initialAnimationTime=initialAnimationTime-0.1;
        target.style["animation-duration"]=initialAnimationTime+"1s";
        target.style["levelup"];
    }
        

    }
};

window.addEventListener("keydown", jump);

var block = document.getElementById("block");

setInterval(function gameOver(){
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if((blockleft < 40) && (characterTop > 120)){
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score : ${count}`; 
        
    
    }
},10);


// function levelup2(){

//   
    
//     // target.style["animation-name"] = "example";
   
//     // target.style["animation-iteration-count"] = "Infinity";
//     // target.style["animation-timing-function"] = "linear";
     




// }

// function levelup3(){

    
   
//     // target.style["animation-name"] = "example";
   
//     // target.style["animation-iteration-count"] = "Infinity";
//     // target.style["animation-timing-function"] = "linear";  

// }
