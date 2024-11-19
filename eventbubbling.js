const Gparent=document.getElementById("grandparent");
Gparent.addEventListener("click",(e)=>{
    setTimeout(()=>{
        console.log("grandparent is clicked");
        Gparent.style.backgroundColor="lightblue";
},2000)
},false)
  
const Parent=document.getElementById("parent");
Parent.addEventListener("click",(e)=>{
    //  e.stopPropagation();
    setTimeout(()=>{
        console.log("parent is clicked");
        Parent.style.backgroundColor="coral";
},2000)
},false)

const Child=document.getElementById("child");
Child.addEventListener("click",(e)=>{
    setTimeout(()=>{
        console.log("child is clicked");
        Child.style.backgroundColor="lightgreen";
},2000)
},true)
  