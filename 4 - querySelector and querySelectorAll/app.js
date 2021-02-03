const listItems = document.querySelectorAll("li:nth-child(even)");

// console.log(listItems);
// console.log(listItems.length);

// for (let count = 0; count < listItems.length; count++) {
//     listItems[count].style.color = "lightgreen";
// };

const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];
const items = document.querySelectorAll("li");

for (let count = 0; count < items.length; count++){  //I always forget the .length in for loops and its driving me crazy
    items[count].style.color = colours[count];
};

console.log(items);
console.log(items.length);