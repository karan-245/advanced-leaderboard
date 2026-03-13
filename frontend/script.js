
let chart;

async function loadLeaderboard(){

const response = await fetch("http://localhost:8080/players");
const players = await response.json();

const list = document.getElementById("leaderboard");

list.innerHTML="";

let names=[];
let scores=[];

players.forEach((p,index)=>{

let li=document.createElement("li");

let rank=index+1;

let medal="";

if(rank==1) medal="🥇";
if(rank==2) medal="🥈";
if(rank==3) medal="🥉";

li.innerHTML=
"<span class='rank'>"+medal+" #"+rank+"</span>"+
"<img class='avatar' src='"+p.avatar+"'>"+
"<span>"+p.name+"</span>"+
"<span>"+p.score+"</span>"+
"<button onclick='deletePlayer("+p.id+")'>❌</button>";

if(index==0) li.classList.add("gold");
if(index==1) li.classList.add("silver");
if(index==2) li.classList.add("bronze");

list.appendChild(li);

names.push(p.name);
scores.push(p.score);

});

updateChart(names,scores);

}

async function addPlayer(){

let name=document.getElementById("name").value;
let score=document.getElementById("score").value;

await fetch("http://localhost:8080/players",{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
name:name,
score:score,
avatar:"https://i.pravatar.cc/40"
})
});

loadLeaderboard();

}

async function deletePlayer(id){

await fetch("http://localhost:8080/players/"+id,{
method:"DELETE"
});

loadLeaderboard();

}

function updateChart(names,scores){

const ctx=document.getElementById("chart");

if(chart) chart.destroy();

chart=new Chart(ctx,{

type:'bar',

data:{

labels:names,

datasets:[{

label:'Scores',

data:scores

}]

}

});

}

setInterval(loadLeaderboard,3000);

loadLeaderboard();
