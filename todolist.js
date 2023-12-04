document.addEventListener("DOMContentLoaded", () => {
    const itemlist = document.getElementById("itemlist");
    const input = document.getElementById("input").value.trim();
    const enterbtn = document.getElementById("enterbtn");
})




// enterbtn.addEventListener("click", () => {
//     items.value = input
// })

function addlist(input) {
  
     const input = document.getElementById("input").value;
    
    const li = document.createElement("li")
    li.innerHTML = `
    <span>${input}</span>
    <button id="delete">Delete</button>`
}