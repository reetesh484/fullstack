//assg 9.1
const ele = document.querySelector(".caption .title");
ele.style.color = "red";

//assg 9.2
const button = document.querySelector(".add-to-cart");
const initialColor = button.style.backgroundColor;
button.addEventListener("mouseenter", () => {
  button.style.backgroundColor = "red";
});
button.addEventListener("mouseleave", () => {
  button.style.backgroundColor = initialColor;
});
