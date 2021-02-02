const heading = document.querySelector("#heading");
const button = document.querySelector("#button");
const input = document.querySelector("#input");

button.addEventListener ("click", () => {
    heading.style.color= input.value;
});