const button = document.getElementById("btn");

const randomColor = () => {
  let val = "0123456789ABCDEF";
  let cons = "#";
  for (let i = 0; i < 6; i++) {
    cons = cons + val[Math.floor(Math.random() * 16)];
  }
  return cons;
};

button.addEventListener("click", bgChange);

function bgChange() {
  const hex = randomColor();
  document.body.style.backgroundColor = hex;
  navigator.clipboard.writeText(hex);
}
