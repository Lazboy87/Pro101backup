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
    divpro.setAttribute("draggable",true);
    divpro.setAttribute("ondragstart",dragstart_handler(event););
    
    
    

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

const dragtab=document.get



