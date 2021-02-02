// const myHeading = document.getElementById("heading");

// myHeading.addEventListener("click",()=>{
//     myHeading.style.color = "red";
// });


// const input = document.getElementById("input");
// const button = document.getElementById("button");

// button.addEventListener("click",()=>{
//     myHeading.style.color = input.value;
// });

// const paragraphs = document.getElementsByTagName("p");
// for (let i = 0; i < paragraphs.length; i++){
//     console.log(paragraphs[i]);
// }

const list = document.getElementsByTagName("li");

// console.log(list.length);
// console.log(list[0]);
// console.log(list[3]);
// list[0].style.color="red";



// for (let listLength = 0; list < listLength; listLength++){
//     list.style.color = red;
// }

// for (let l of list) {
//     l.style.color="red";
//     console.log(l);
// }


const notOrange = document.getElementsByClassName("not-orange");

for (let listLength = 0; listLength < notOrange.length; listLength++) {
    notOrange[listLength].style.color = "red";
}