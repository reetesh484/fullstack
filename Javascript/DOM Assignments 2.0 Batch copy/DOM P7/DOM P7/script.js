//Assignment 1

const mainLang = document.querySelector(".main__languages");

let OriginalList = document.querySelectorAll(".main__languages a");
let flag = true;

function remove() {
  let tempList = OriginalList;
  tempList = [...tempList];
  tempList.map((ele) => {
    if (ele.innerText.includes("2.0")) ele.style.display = "none";
  });
}
if (flag) {
  remove();
}

//Assignment 2

const input = document.querySelector(".main__form-input");
const submit = document.querySelector(".main__form-btn");

input.removeAttribute("disabled");
submit.removeAttribute("disabled");

submit.addEventListener("click", () => {
  flag = false;
  add();
});

function add() {
  let tempList = OriginalList;
  tempList = [...tempList];
  tempList.map((ele) => {
    ele.style.display = "inline";
  });
}
