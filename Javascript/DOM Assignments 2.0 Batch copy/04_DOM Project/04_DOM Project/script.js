let ele = document.querySelectorAll(".clash-card__unit-stats");

let colors = ["#E7BC4A", "#D44086", "#B67431", "#79A734", "#99A2AA"];

ele = [...ele];
ele.map((item, index) => {
  item.style.backgroundColor = colors[index];
  item.style.color = "#fff";
  item.children[0].style.borderColor = "#000";
  item.children[1].style.borderColor = "#000";
  item.children[2].style.color = "#fff";
});
