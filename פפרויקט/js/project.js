let players = JSON.parse(localStorage.getItem("players")) || [];
let currentUser = localStorage.getItem("currentUser");

console.log(currentUser)
function func(){
  let players = JSON.parse(localStorage.getItem("players")) || [];
  let currentUser = (localStorage.getItem("currentUser"));
  console.log(Number(players[0].password))
  console.log(Number(players[0].password));
  console.log(currentUser)
  console.log(currentUser);
  for (let index = 0; index < players.length; index++) {
    if (Number(players[index].password) === Number(currentUser))
    {
      players[index].score+=100;
      localStorage.setItem("players", JSON.stringify(players));
      let y=players[index].score;
      return players[index].score;
    } 
  }
  return 0;
}
function smallFireworkEffect() {
  confetti({
    particleCount: 50,
    spread: 70,
    origin: { y: 0.4 }, // גובה הבזק
    colors: ['#bb0000', '#ffffff', '#ffd700']
  });
}
alert("good luck!!!")
let nikood=0
const board = document.querySelector(".board");
const arr=[{id:1 ,image:"1.jpg" ,key:0},{id:1 ,image:"1.jpg" ,key:0},{id:2 ,image:"2.jpg" ,key:0},{id:2 ,image:"2.jpg" ,key:0},
    {id:3 ,image:"3.jpg" ,key:0},{id:3 ,image:"3.jpg" ,key:0},{id:4 ,image:"4.jpg" ,key:0},{id:4 ,image:"4.jpg" ,key:0},
    {id:5 ,image:"5.jpg" ,key:0},{id:5 ,image:"5.jpg" ,key:0},{id:6 ,image:"6.jpg" ,key:0},{id:6 ,image:"6.jpg" ,key:0},
    {id:7 ,image:"7.jpg" ,key:0},{id:7 ,image:"7.jpg" ,key:0},{id:8 ,image:"7.jpg" ,key:0},{id:8 ,image:"8.jpg" ,key:0},
    {id:9 ,image:"9.jpg" ,key:0},{id:9 ,image:"9.jpg" ,key:0},{id:10 ,image:"10.jpg" ,key:0},{id:10 ,image:"10.jpg" ,key:0}]
const zioon = document.createElement("div")
zioon.classList.add("zioon")
zioon.style.width='100%'
zioon.style.height='5%'
zioon.textContent=`יש לך ${nikood} נקודות`
board.append(zioon)


const hagrala =[]
for (let index = 0; index < 20; index++) {
  hagrala.push(false);
}
console.log(hagrala)
for (let index = 0; index < 20; index++) {
  do{
     x=Math.floor(Math.random()*20);
     if(hagrala[x]===false)
        {
            arr[index].key=x;
            hagrala[x]=true;
            break
        }
  }
  while(hagrala[x]===true)
}
arr.sort((a,b)=>a.key-b.key);
for (let index = 0; index < 20; index++) {
  hagrala.pop();
}
for (let index = 0; index < 20; index++) {
  hagrala.push(false);
}
let count=0;
const temp=[];
for (let index = 0; index < 20; index++) {
    const newDiv = document.createElement("div");
    newDiv.dataset.id = arr[index].id;
    newDiv.dataset.key = arr[index].key;
    newDiv.classList.add("card");
    newDiv.style.height="20%";
    newDiv.style.width="18%";
    newDiv.style.backgroundImage="url('../images/back.jpg')";
    board.append(newDiv);
    newDiv.addEventListener("click",(event)=>{
      
    if (hagrala[newDiv.dataset.key]===false) {
    if(count<2){
      const id = newDiv.dataset.id;
      const key = newDiv.dataset.key;
      newDiv.style.backgroundImage = `url('../images/${id}.jpg')`;
      if(count===1 && key===temp[0].dataset.key)
        {
          
        }
        else{
          count++;
          temp.push(newDiv);
        }
    }
    if(count===2)
      {
         setTimeout(() => {
          if (temp[0].dataset.id === temp[1].dataset.id) {
            hagrala[temp[0].dataset.key]=true;
            hagrala[temp[1].dataset.key]=true;
            nikood += 10; 
            if(nikood==100)
              {
                confetti({
                  particleCount: 150,
                  spread: 90,
                  origin: { y: 0.6 }
                });
                smallFireworkEffect();
                smallFireworkEffect();
                smallFireworkEffect();
                alert(`;מזל טוב נצחת! יש לך ${func()}`)
              }
            else{

            }
            smallFireworkEffect();
            zioon.textContent = `יש לך ${nikood} נקודות`;
          } 
          else {
             
              temp[0].style.backgroundImage = "url('../images/back.jpg')";
              temp[1].style.backgroundImage = "url('../images/back.jpg')";  
          }
          temp.pop();
          temp.pop();
          count = 0;
      }, 1000);
      }
   } })
}


