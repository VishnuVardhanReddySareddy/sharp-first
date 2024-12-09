// Write your code below:

const header = document.getElementById("main-heading");
header.textContent = "Fruit World";

header.style.color = "orange";

const header1 = document.getElementById("header");

header1.style.backgroundColor = "green";
header1.style.borderBottom = "orange";

const header2 = document.getElementById("basket-heading");

header2.style.color = "green";

const header3 = document.getElementById("thanks");

let para = document.createElement("p");
para.textContent = "Please visit us again";

header3.appendChild(para);

const fruitItems = document.getElementsByClassName("fruit");

fruitItems[2].style.backgroundColor = "yellow";

for (let i = 0; i < fruitItems.length; i++) {
  fruitItems[i].style.fontWeight = "bold";
}
