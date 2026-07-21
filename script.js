const btns  = document.querySelectorAll(".cell");
let txt= document.querySelector("#status");
const btn2= document.querySelector("#restart");
const div= document.querySelector(".board");

//const hi kyu liya ?
//list hai isiliye for for each ka use kiya 
//buttons.forEach((button) => {
//    button.addEventListener("click", () => {
//        button.style.backgroundColor = "red";
//    });
//});
//individually bhi changes kr skte using the arrays property
//btns[3].style.backgroundColor="red";
let turn =0;


btns.forEach((button) => {
    button.addEventListener("click", () => {
        if(turn==0){
        button.innerHTML = "X";
        txt.textContent="Player 0's turn";
        turn=1;
        checkWinner();}else{
            button.innerHTML="O";
            turn=0;
            txt.textContent="Player X's turn";
            checkWinner();

        }
    });
});

const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



btn2.addEventListener("click",()=>{
    for(i=0;i<9;i++){
        btns[i].innerHTML="";
    }
    txt.textContent = "Player O's Turn";
    turn=1;
    
});


const checkWinner =()=>{
    for(let key of winpatterns){
        if(btns[key[0]].innerHTML!="" && btns[key[1]].innerHTML!="" && btns[key[2]].innerHTML !=""){
        if(btns[key[0]].innerHTML===btns[key[1]].innerHTML && btns[key[1]].innerHTML===btns[key[[2]]].innerHTML){
            console.log("Winner is :" ,btns[key[0]].innerHTML);
            txt.textContent="Game Over : "+btns[key[0]].innerHTML+" wins";
        }}
    }
    
}


