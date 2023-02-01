window.addEventListener("DOMContentLoaded", start);

function start(){
  //add container to filter buttons and make each button clickable
const filterActive = document.querySelectorAll("nav button");
filterActive.forEach((button) => button.addEventListener("click", filterButtons))
getActorData();
}

//create data fetch function
//data url to get json data from
const urlData = "actors.json"; //no other parent path because it is in same pathfolder
let actors; //actor data container item

async function getActorData(){
var dataresult = await fetch(urlData);
actors = await dataresult.json();
console.log(actors);
showActorList();
filterButtons();
}

// filters function
function filterButtons() {
  filter = this.dataset.category; //find correct data value and set to this.
  document.querySelector(".filtername").textContent = this.textContent //h2-titel updates to corresponding filter name.

  //remove .chosen from non-active button
  document.querySelector(".chosen").classList.remove("chosen");
  //add .chosen to active button
  this.classList.add("chosen");
  showActorList();
} 

// function buttonActivate()
//   {
//   //button filter called by anonymous function
//   filterActive.querySelector(".chosen").classList.remove("chosen");
//   this.classList.add("chosen");

// }
  // showActorList();


//insert all relevant actor data into the list
function showActorList(){
const sectionActor = document.querySelector("#actorListView");
const temp = document.querySelector("template");
actors.forEach(actor => {
  const actorCloneList = temp.cloneNode(true).content;
  //add name of actor to clone Node
  actorCloneList.querySelector("li").textContent = actor.fullname
  //add click functionality by anonymous func
  actorCloneList.querySelector("li").addEventListener("click", () => { 
  //popop window
  const popwindow = document.querySelector("#popop");//from babushka exercise in 2.sem
  document.getElementById("popop").style.display = "block";
  popwindow.querySelector(".name").textContent = actor.fullname;
  popwindow.querySelector(".movie").textContent = actor.movie;
  popwindow.querySelector("#luk").addEventListener("click", () => popwindow.style.display = "none")
  //add the actor to the list section
  
});
sectionActor.appendChild(actorCloneList);
})}