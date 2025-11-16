let players = JSON.parse(localStorage.getItem("players")) || [];
const login=document.querySelector(".login")
const signin=document.querySelector(".signin")
const username=document.querySelector("#username")
const password=document.querySelector("#password")
signin.addEventListener("click",(e)=>{
    window.location.href = "../html/Signin.html";
})

login.addEventListener("click",(event)=>{
    for (let index = 0; index < players.length; index++) 
        {
            if(players[index].name===username.value&&players[index].password===password.value)
                {
                   alert(`😍🥰😊😉${username.value} ברוך שובך `)
                   localStorage.setItem("currentUser", password.value);
                   window.location.href = "../html/main.html";
                   return
                }
        }
           alert("יש להרשם למערכת 🤨");
           window.location.href = "../html/Signin.html";
})
const resetBtn = document.querySelector("#resetBtn");
    resetBtn.addEventListener("click", () => {
    localStorage.setItem("players", JSON.stringify([]));
    localStorage.removeItem("currentUser");
    alert("המערכת אופסה בהצלחה!");
});