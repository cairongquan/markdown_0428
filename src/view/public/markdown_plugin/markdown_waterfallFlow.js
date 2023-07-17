(() => {
  let tagName = "water-fall-flow";
  let dom = document.getElementsByTagName(tagName)[0];

  let domAttr = dom.getAttribute("data");
  let picList = (domAttr && domAttr.split(",")) || [];
  // let picList = new Array(16).fill(null);

  let width = document.querySelector(".right-box").offsetWidth;
  let picNum = Math.floor(
    document.querySelector(".right-box").offsetWidth / 224
  );

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
  }

  let ul = document.createElement("ul");
  ul.className = "water-list";

  render();

  function render() {
    new Array(picNum).fill({}).forEach((item) => {
      let li = document.createElement("li");
      li.style.width = 224 + "px";
      li.className = "water-item";
      ul.appendChild(li);
    });
    dom.appendChild(ul);
    picList.forEach((item) => {
      let waterDiv = document.createElement("img");
      waterDiv.className = "water-div";
      waterDiv.src = item;
      Object.assign(waterDiv.style, {
        height: getRandomIntInclusive(200, 250) + "px",
      });
      let minDom = getMinHeightLis();
      minDom.appendChild(waterDiv);
    });
  }

  function getMinHeightLis() {
    let waterItems = Array.from(document.querySelectorAll(".water-item")).map(
      (item) => {
        return {
          height: item.offsetHeight,
          item,
        };
      }
    );
    return waterItems.sort((a, b) => {
      return a.height - b.height;
    })[0].item;
  }
})()
