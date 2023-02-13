let ele = document.querySelector(".nav-center");
let newEle = document.createElement("div");
newEle.innerHTML = ele.children[2].innerHTML;
newEle.children[0].innerText = "Pro subscription";
ele.appendChild(newEle);

let list = document.querySelector(".tags-container").children[1];
let newItem = document.createElement("a");
newItem.innerText = "Chinese(7)";
list.appendChild(newItem);
console.log(list.innerHTML);
