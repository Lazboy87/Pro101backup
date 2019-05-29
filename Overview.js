const upcCon = document.getElementById('upcommingContainer');

const impCon = document.getElementById('InprogressContainer');
    
const compCon = document.getElementById('CompletedContainer');

const form = document.getElementById('projectform');
    


    upcCon.style.display ="none";
    impCon.style.display="block";
    compCon.style.display="none";
    form.style.display="none";



var inProgressPro=[];
var upcomPro=[];
var completePro=[];




function showupc() 
{
    upcCon.style.display ="block";
    impCon.style.display="none";
    compCon.style.display="none";
   
}

function showimp() 
{
    upcCon.style.display ="none";
    impCon.style.display="block";
    compCon.style.display="none";
}
   

function showcomp() 
{
    upcCon.style.display ="none";
    impCon.style.display="none";
    compCon.style.display="block";
}
   

function showform() 
{

   form.style.display = "block";
   
}

function closeform() 
{
form.style.display = "none";
}   



function createProject() {

  var namepro= document.getElementById("Projectname").value;

 var type= document.getElementById("type").value;
    
var divpro = document.createElement("div");
var feedpro = document.createElement("div");
  
divpro.innerHTML=namepro;
divpro.className="projectdiv";
    divpro.setAttribute("id","projectdiv1");
    divpro.setAttribute("draggable",true);
   
    
    
    

feedpro.className="feeddiv";





if(type == "inprogress"){

  var inps= " In Progress";  
feedpro.innerHTML="User Crated Project"+"<br />"+ " Called: "+namepro +"<br />"+" In the: "+ inps+ " section.";

 document.getElementById("Feedup1").appendChild(feedpro);   
document.getElementById("IpProject1").appendChild(divpro);
 
    namepro={name:namepro,Type:inps,}
    inProgressPro.push(namepro);
    
    closeform();
    
  

}
    
    
    
if(type == "upcoming"){
    
var upcs= " Upcoming";  
feedpro.innerHTML="User Crated Project"+"<br />"+ " Called: "+namepro +"<br />"+" In the: "+ upcs+ " section.";
    

document.getElementById("Feedup1").appendChild(feedpro);
    
document.getElementById("UpProject1").appendChild(divpro);
 
       namepro={name:namepro,Type:upcs,}
    upcomPro.push(namepro);
    
    
    closeform();   
}   
    
    
 
  
    
    
console.table(inProgressPro);
    console.table(upcomPro);


}


/* Drag and drop functions and listeners */



const dragpro=document.getElementByClass("projectdiv");

const dragtab=document.getElementById("InprogressHeader");


 //---> Try to implement this
// The dragged item gets stored in dragged
var dragged;

//Eventes fires on the dargable target
document.addEventListener("drag", function(e){
    console.log("drag");
}, false);

//Dragstart
document.addEventListener("dragstart", (e)=>{
    //Store a reference on the dragged item
    dragged = e.target;
    //Make it more transparent on dragstart
    e.target.style.opacity = .5;

    console.log("drag start");
}, false);

//Dragend
document.addEventListener("dragend", (e)=>{
    //Reset transparency
    e.target.style.opacity= "";

    console.log("drag end");
}, false);

//Dragover
document.addEventListener("dragover", (e)=>{
    //Prevent default to allow drop
    e.preventDefault();
    console.log("drag over");
}, false)

//Dragenter
document.addEventListener("dragenter", (e)=>{
    //Highlight drop target when draggable element enters it
    if (e.target.className == "dropZone") {
        e.target.style.background = "grey";
        console.log("drag enter");
    }

}, false)

//Dragleave
document.addEventListener("dragleave", (e)=>{
    //Resets background of drop target whe element leaves it
    if (e.target.className == "dropZone") {
        e.target.style.background = "";
        console.log("drag leave");
    }

}, false);

//DROP
document.addEventListener("drop", (e)=>{
    //Prevent default action
    e.preventDefault();
    //Move dragged element to the selected drop target
    if (e.target.className == "dropZone") {
        e.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        e.target.appendChild(dragged);

        console.log("drop");
    }

}, false)

     
 



