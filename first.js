let boxes= document.querySelectorAll('.box');
let restBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#New-game");
let msgContainer=document.querySelector(".msg-con");
let msg=document.querySelector("#msg");
let turn0=true;
const winpatterns=[
    [0,1,2], [0,3,6], [0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn0) {box.innerText="X";
        box.style.color="blue";
        box.style.backgroundColor="tomato";
        turn0=false; 
        }else {
        box.innerText="O";
        box.style.color="red";
        box.style.backgroundColor="yellow";
        turn0=true;};
        box.disabled=true;
        checkWinner();
    }
    );
});
const disableBoxes= () => {
    for( let box of boxes){
        box.disabled= true;
    }
};
const enableBoxes= () => {
    for( let box of boxes){
        box.disabled= false;
        box.style.backgroundColor="SpringGreen";
        box.innerText="";
    }
};
const showWinner = (winner) => {
    msg.innerText= `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = ()=>{
    for(pattern of winpatterns){
            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;
            if(pos1val!="" && pos2val!="" && pos3val!=""){
                if(pos1val===pos2val && pos2val===pos3val)
                    showWinner(pos1val);
            }
    }
};
const resetGame= () =>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
newBtn.addEventListener("click", resetGame);
restBtn.addEventListener("click", resetGame);