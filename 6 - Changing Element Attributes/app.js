const image = document.querySelector("#image");
const input = document.querySelector("#input");
const button = document.querySelector("#submit");

console.log(image);

button.addEventListener("click", () => {
    image.src = input.value;            // so close image = input.value;
})