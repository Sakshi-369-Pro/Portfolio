const words=["Data Analyst_","AI Engineer_","Programmer_","web developer_"];
let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){
current=words[i];
document.querySelector(".typing").textContent=current.substring(0,j);

if(!isDeleting && j++===current.length)
isDeleting=true;

else if(isDeleting && j--===0){
isDeleting=false;
i=(i+1)%words.length;
}

setTimeout(type,isDeleting?60:100);
}
type();

window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
let windowHeight=window.innerHeight;
let revealTop=el.getBoundingClientRect().top;
if(revealTop<windowHeight-100){
el.classList.add("active");
}
});
});

document.querySelectorAll(".project-card").forEach(card=>{
card.addEventListener("click",()=>{
card.classList.toggle("active");
});
});