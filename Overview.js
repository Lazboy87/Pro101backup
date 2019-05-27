const upcCon = document.getElementById('upcommingContainer');

const impCon = document.getElementById('InprogressContainer');
    
const compCon = document.getElementById('CompletedContainer');

const form = document.getElementById('projectform');
    


    upcCon.style.display ="none";
    impCon.style.display="block";
    compCon.style.display="none";
    form.style.display="none";






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
form.style.display = "none"
}


/*
var inProgressPro=[][];
var upcomPro=[][];
var completePro=[][];*/












function createProject() {

  var namepro= document.getElementById("Projectname").value;

 var type= document.getElementById("type").value;
    
var div = document.createElement("div");
div.style.width = "200px";
div.style.height = "200px";
div.style.background = "blue";
div.style.color = "white";
div.style.display= "inline-block";
div.style.position="relative";
div.innerHTML="Project:"+namepro;


  /*
div.onmouseout  = function doSth();
div.onmouseover = function doSthElse();
    

function doSth(){}
    
function doSthElse(){
    
style.color= "red";
}
*/



if(type == "inprogress"){

    


    
document.getElementById("IpProject1").appendChild(div);
    
}
    
    
    
if(type == "upcoming"){

    

;
    
document.getElementById("UpProject1").appendChild(div);
    
}   
    
    
    
  
    
    
console.log(div);

}
   




        
    


