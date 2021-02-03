const placeholder = document.querySelector("#placeholder");
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const list = document.querySelector("#list");

// submit.addEventListener("click", () => {
//     placeholder.style.color = "goldenrod";
//     placeholder.textContent = input.value;
// })

submit.addEventListener("click", () => {
    placeholder.style.color = "goldenrod";
    placeholder.textContent = `<li>${input.value}</li>`; //BACKTICKS!!!!

    list.innerHTML = `<li>${input.value}</li>`;
})

