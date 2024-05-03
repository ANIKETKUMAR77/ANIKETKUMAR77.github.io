const inputeBox= document.getElementById("inputeBox");   
const list_container= document.getElementById("list_container");



function addTask(){
    if(inputeBox.value===''){
        alert("you must write somthing! ");

    }
    else{
        let li= document.createElement("li");   
        li.innerHTML=inputeBox.value;
        list_container.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)

    }
    inputeBox.value="";
}
list_container.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove() ;
        saveData(); 
    }
},false);

function saveData(){
    localStorage.setItem("data", list_container.innerHTML);


}
function showtask(){
    list_container.innerHTML=localStorage.getItem("data");
}

showtask();
console.log("aniket kumar");    