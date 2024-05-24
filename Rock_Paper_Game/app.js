let user = 0; 
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user");
const compscore = document.querySelector("#comp");


const gencompchoice = () => {
const options = ["rock", "paper", "scissors"];
let idx= Math.floor(Math.random()*3);
return options[idx];

}


const showwinner =(userwin) =>{
    if (userwin === true){
        user++;
        msg.innerHTML = "YOU WIN!";
        msg.style.backgroundColor = "green";
        userscore.innerText = user;
    }
    else {
        comp++;
        
        msg.innerHTML = "YOU lose!";
        msg.style.backgroundColor = "red";
        compscore.innerText = comp;
        
    }
}


const playGame = (UC) => {
  
    console.log("User choice =",UC);
    const compchoice = gencompchoice();
    console.log("Comp choice =",compchoice);

    if (UC === compchoice){
        console.log ("Game was draw");
        msg.innerHTML = "GAME WAS DRAW!";
        msg.style.backgroundColor = "#7fffd4"
    }
    else {
        let userwin = true;
        if (UC === "rock"){
           userwin=  compchoice === "paper" ? false: true;
        }
        else if (UC === "paper"){
          userwin = compchoice === "scissors" ? false: true;  
        }
        else {
            userwin = compchoice === "rock" ? false: true;
        }
        showwinner(userwin);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() => {
    const UC = choice.getAttribute("id");
     playGame(UC);
    })
})