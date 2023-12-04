// const input=document.getElementById("input").value.trim()
// const button =document.getElementById("enter")
// const listItems = document.getElementById("listItems")

// button.addEventListener("click",function (){
     
// additems(input)

// })

// function additems(input){
//     const li =document.createElement("li")
   
//     if(input !== ""){
//          li.innerHTML=`
//         <li>${input}</li>`
//     }else{
//         return "input cannot be empty"
//     }
// }

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById("enter");

    button.addEventListener("click", function () {
        const input = document.getElementById("input").value.trim();
        const listItems = document.getElementById("listItems");

        if (input !== "") {
            addItems(input, listItems);
            document.getElementById("input").value = ''; // Clear input field
        } else {
            alert("Input cannot be empty");
        }
    });

    function addItems(input, listItems) {
        const li = document.createElement("li");
        li.textContent = input;
        listItems.appendChild(li);
    }
});