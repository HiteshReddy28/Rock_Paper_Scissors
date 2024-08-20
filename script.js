// const btn = document.querySelector("button")
// const body = document.querySelector("body")
// const turn = ()=>{
//     if(btn.innerText === "Light Mode")
//     {
//         body.classList.add("light")
//         body.classList.remove('dark')
//         btn.innerText = "Dark mode"
//     }
//     else{
//         body.classList.add('dark')
//         body.classList.remove('light')
//         btn.innerText = "Light Mode"
//     }
    
// }
// btn.addEventListener("click",turn)


let user=0
let computer=0
const msg = document.querySelector("#msg")
choices = document.querySelectorAll('.choice')
const userscore = document.querySelector("#you")
const compscore = document.querySelector("#comp")
const computerchoice = () =>{
    const option = ['rock','paper','Scissors']
    return option[Math.floor(Math.random()*3)]
}
const updatemsg = (userwin)=>{   
    if(userwin === 1)
    {
        user++
        userscore.innerText = user
        msg.innerText = 'You won!!'
        msg.style.backgroundColor = "green"
    }
    else{
        computer++
        compscore.innerText = computer
        msg.innerText = 'You lose'
        msg.style.backgroundColor = "red"
    }
}
const playgame = (userid)=>
{
    const a = computerchoice()
    if(a === userid)
    {
        msg.innerText = 'Opps Draw'
        msg.style.backgroundColor = "aquamarine"
    }
    else{
        userbool = 1
        if(userid === "rock")
        {
            if(a === 'Scissors')
            {
                userbool = 1
            }
            else{
                userbool = 0
            }
        }
        else if(userid === 'Scissors')
        {
            if(a === 'rock'){
                userbool = 0
            }
            else{
                userbool = 1
            }
        }
        else{
            if(a === 'rock')
            {
                userbool = 1
            }
            else{
                userbool = 0
            }
        }
        updatemsg(userbool)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const user_choice = choice.getAttribute('id')
        playgame(user_choice)
    })
});

