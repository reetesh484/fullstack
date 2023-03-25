const header = document.querySelector("header");
header.children[0].setAttribute("src", "./assets/ineuron-logo.png");

const appPrice = document.querySelector(".app_price");
appPrice.children[0].innerText = "$10";

const footerSocial = document.querySelector(".footer_social");
const newIcon = document.createElement("div");
newIcon.innerHTML = footerSocial.children[0].innerHTML;
newIcon.classList.add("footer_social_ico");
newIcon.children[0].classList.add("fa-linkedin");
footerSocial.appendChild(newIcon);
