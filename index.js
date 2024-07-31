let btn = document.querySelector(".btn");


btn.addEventListener("click",()=>{
   console.log("hello ");


   let li = document.createElement("li");
   let input = document.querySelector(".input");
   if(input.value==="Red"){
       document.body.style.backgroundColor="red";
       
    }
    else if (input.value==="Green"){
        document.body.style.backgroundColor="green";
        
     }
     else if (input.value==="Black"){
        document.body.style.backgroundColor="black";
        document.body.style.color ="white";

     }
     else if (input.value==="Blue"){
        document.body.style.backgroundColor="blue";
        
     }
    else{
        document.body.style.backgroundColor="white";
        document.body.style.color ="black";


    }
   li.innerHTML=input.value;
   input.value ="";
    



   let body=document.querySelector("body");
   body.appendChild(li);


})