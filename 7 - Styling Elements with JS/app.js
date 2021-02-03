const image = document.querySelector("#cat");
const button = document.querySelector("#submit");

console.log(image.style); //it has no style !

// button.addEventListener("click", () => {
//     if (button.textContent = "hide"){
//         image.display = "show";
//     }
//     else {  

//     }
// })
// Not a terrible attempt

button.addEventListener("click", () => {
    if(image.style.display == "none"){
        image.style.display = "block";
        button.textContent = "hide";
    } else {
        image.style.display = "none";
        button.textContent = "show";
    }
});