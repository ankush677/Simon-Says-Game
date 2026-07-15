let userSeq = [];
let gameSeq = [];
let highest_score = 0;
let btns = ["b1","b2","b3","b4"];

let started = false;
let level = 0;

let h3 = document.querySelector('h3');
let h31 = document.querySelector("#h31");
let h32 = document.querySelector("#h32");

let cont = document.querySelector(".container");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game Started");
        started = true;
    }
    levelup();
});

function gameflash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    },500);
}

function levelup(){
    userSeq = [];
    level++;

    h3.innerText = `Score: ${level}`;
    let ranIdx = Math.floor(Math.random()*3);
    let rancolor = btns[ranIdx];
    let ranbtn = document.querySelector(`.${rancolor}`);
    gameSeq.push(rancolor);
    console.log(gameSeq);
    gameflash(ranbtn);
}

function checkans(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        
        if(level > highest_score){
            highest_score = level;
        }
        
        h3.innerText = `Score: 0`;
        h31.innerText = `Best: ${highest_score}`;
        h32.innerHTML = `Game over <br> Press any key to start`;
        cont.classList.add("container");

        setTimeout(()=>{
            cont.classList.remove("container");
        },500)
        reset()
    }
}

function userflash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    },500);
}


function btnpress(){
    console.log(this);
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");

    console.log(usercolor);
    userSeq.push(usercolor);
  
    checkans(userSeq.length-1);

}



let allbtns = document.querySelectorAll('.box');
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}