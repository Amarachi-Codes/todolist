const input=document.getElementById("input").value.trim()
const button =document.getElementById("enter")

const listItems = document.getElementById("listItems")

button.addEventListener("click",()=>{

})

function additems(input){
    const li =document.createElement("li")
    if(input !== ""){
         li.innerHTML=`
        <li>${input}</li>`
    }else{
        return "input cannot be empty"
    }
}