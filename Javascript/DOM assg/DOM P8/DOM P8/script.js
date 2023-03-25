//assg 8.1
const aside = document.querySelector("aside");

const parent = aside.parentNode;
const wrapper = document.createElement("div");
wrapper.classList.add("col-lg-4");
wrapper.style.height = "400px";
wrapper.style.overflow = "auto";
aside.classList.remove("col-lg-4");
wrapper.style.border = "5px solid red";
wrapper.style.padding = "4px";
parent.replaceChild(wrapper, aside);
wrapper.appendChild(aside);

//assg 8.2
const body = document.body;

body.style.backgroundImage = "none";

//assg 8.3
const navbar = document.querySelector("#navbarTogglerDemo01");
const toggler = document.querySelector(".navbar-toggler");

toggler.addEventListener("click", () => {
  navbar.classList.toggle("collapse");
});
