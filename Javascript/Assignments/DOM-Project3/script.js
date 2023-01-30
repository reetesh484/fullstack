const refreshBtn = document.querySelector(".refresh-btn");
const colorBox = document.querySelectorAll(".color");

const generatePalette = () => {
  for (let i = 0; i < colorBox.length; i++) {
    let randomHex = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
    colorBox[i].children[0].style.backgroundColor = randomHex;
    colorBox[i].children[1].innerText = randomHex;
    colorBox[i].addEventListener("click", () => {
      copyColor(i, randomHex);
    });
  }
};

const copyColor = (i, hex) => {
  navigator.clipboard.writeText(hex);
  const intervalId = setInterval(() => {
    colorBox[i].children[1].innerText = "✅ Copied";
  }, 10);
  setTimeout(() => {
    clearInterval(intervalId);
    colorBox[i].children[1].innerText = hex;
  }, 2000);
};

refreshBtn.addEventListener("click", generatePalette);

generatePalette();
