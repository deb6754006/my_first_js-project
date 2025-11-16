let players = JSON.parse(localStorage.getItem("players")) || [];
const signin=document.querySelector(".signin")
const username=document.querySelector("#username")
const password=document.querySelector("#password")
const email=document.querySelector("#email")
const checkpassword=document.querySelector("#checkpassword")
signin.addEventListener("click",(event)=>{
    let degel=false;
   
    if(!username.value||!password.value||!checkpassword.value||!email.value)
        {
            alert("יש למלא את כל השדות");
            return;
        } 
        if(checkpassword.value!=password.value)
        {
            alert("אימות סיסמה לא תקין"),
            checkpassword.value="";
            return;
        }
        if(password.value.length<6)
            {
                alert("יש לכלול 6 תווים בסיסמה"),
               password.value="";
               checkpassword.value="";
                return;
            }
    for (let index = 0; index < players.length; index++) 
        {
            if(players[index].name===username.value&&players[index].password===password.value)
                {
                   alert("המשתמש קיים כבר במערכת") ;
                   degel=true;
                   username.value="";
                   password.value="";
                   break;
                }
                else if(players[index].password===password.value){
                    alert("הסיסמא כבר קיימת במערכת😏")
                    flag=true
                    password.value=""
                    break
                }
        }
        if(degel!=true)
            {
                const obj=
                {  
                    name:username.value,
                    password:password.value,
                    email:email.value,
                    score:0,
                };
                players.push(obj);
                localStorage.setItem("players", JSON.stringify(players));
                alert(`😍🥰😊😉${username.value} ברוך הבא`)
                username.value="";
                
                email.value="";
                localStorage.setItem("currentUser", password.value);
                password.value="";
                window.location.href = "../html/main.html";
            }
})