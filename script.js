window.addEventListener("DOMContentLoaded", start);

function start(){
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
}

//insert all relevant actor data into the list
function showActorList(){
const sectionActor = document.querySelector("#actorListView");
const temp = document.querySelector("template");
actors.forEach(actor => {
  const actorCloneList = temp.cloneNode(true).content;
  //add name of actor to clone Node
  actorCloneList.querySelector("li").textContent = actor.fullname
  actorCloneList.querySelector("li").addEventListener("click", () => { 
  

  //popop window
  const popwindow = document.querySelector("#popop");//from babushka exercise in 2.sem
  document.getElementById("popop").style.display = "block";
  popwindow.querySelector(".name").textContent = actor.fullname;
  popwindow.querySelector(".movie").textContent = actor.movie;})
  //add the actor to the list section
  sectionActor.appendChild(actorCloneList);
});

}