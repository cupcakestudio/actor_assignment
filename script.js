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
  temp.cloneNode(true).content;
  
});

}