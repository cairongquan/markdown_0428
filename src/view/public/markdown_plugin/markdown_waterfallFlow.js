const tagName = "water-fall-flow";
const dom = document.getElementsByTagName(tagName)[0];

const domAttr = dom.getAttribute("data");
// const picList = (domAttr && domAttr.split(",")) || [];
const picList = new Array(16).fill(null);

const width = document.querySelector(".right-box").offsetWidth;
const picWidth = Math.floor(
  document.querySelector(".right-box").offsetWidth / 3
);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}

const ul = document.createElement("ul");
ul.className = "water-list";

render();

function render() {
  picWidth.forEach((item) => {
    const li = document.createElement("li");
    li.style.width = picWidth + "px";
    ul.appendChild(li);
  });
}
