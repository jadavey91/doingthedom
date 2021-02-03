const input = document.querySelector("#input");
const button = document.querySelector("#submit");
const list = document.querySelector("#list");
const button3 = document.querySelector("#remove");
const listItems = document.querySelectorAll("li");

// const button2 = document.querySelector("#hide");

// const showhidebtn = document.getElementById('showhide-btn')

button.addEventListener("click", () => {
  let listItem = document.createElement("li");
//   listItem.addEventListener("mouseover", () => {
//     listItem.textContent = listItem.textContent.toUpperCase();
// });
// listItem.addEventListener("mouseout", () => {
//     listItem.textContent = listItem.textContent.toLowerCase();
// });
  listItem.textContent = input.value;
  console.log(listItem);
  list.appendChild(listItem);
  input.value = "";
});

button3.addEventListener("click", () => {
    list.removeChild(document.querySelector("#list li:last-child"));
});

// let timeoutID = setTimeout((something) => {
//     console.log(something);
// }, 7500, "Hello world!");
// console.log(timeoutID);

// for (let listItem of listItems) {
//     listItem.addEventListener("mouseover", () => {
//         listItem.textContent = listItem.textContent.toUpperCase();
//     });
//     listItem.addEventListener("mouseout", () => {
//         listItem.textContent = listItem.textContent.toLowerCase();
//     });
// }

list.addEventListener("mouseover", (event) => {
    if (event.target.tagName === "LI") {
    event.target.textContent = event.target.textContent.toUpperCase();
    }
});

list.addEventListener("mouseout", (event) => {
    if (event.target.tagName === "LI") {
    event.target.textContent = event.target.textContent.toLowerCase();
    }
});

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const li = event.target;
        const parent = li.parentNode;
        parent.removeChild(li);
    };
});



// button2.addEventListener("click", () => {
//   if (list.style.display === "none") {
//     button2.textContent = "hide";
//     list.style.display = "block";
//   } else {
//     button2.textContent = "show";
//     list.style.display = "none";
//   }
// });



//challenge cont'd
//show/hide list
//in console, type list.style to find object properties
//then use list.style.display, it will show 'block' so you can show none
// showhidebtn.addEventListener("click", () => {
//     let list = document.getElementsByTagName('ul')[0];
//     if(list.style.display == 'none') {
//         list.style.display = 'block';
//         showhidebtn.textContent = 'hide';
//     } else {
//         list.style.display = 'none';
//         showhidebtn.textContent = 'show';
//     }
// })
//inspect the html you can then see inline style as display:"none" added in when button clicked
