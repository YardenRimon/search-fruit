const input = document.querySelector(".input-box");
const board = document.querySelector(".board");
const resultsNum = document.querySelector(".results-num");
const fruitsArr = [
  "apple",
  "banana",
  "blueberry",
  "cherries",
  "grapes",
  "kiwi",
  "lemon",
  "mango",
  "orange",
  "strawberry",
  "watermelon",
  "peach",
  "pear",
  "fig",
];
let filterArr = fruitsArr;

fruitsArr.sort();
const fruitsObjArr = [];

for (let i = 0; i < fruitsArr.length; i++) {
  fruitsObjArr[i] = {
    title: fruitsArr[i],
    id: i + 1,
    Image: `${fruitsArr[i]}.png`,
    selected: false,
  };
}

display(fruitsObjArr);

input.oninput = function () {
  filterArr = fruitsObjArr.filter(function (e) {
    return e.title.includes(input.value) || e.selected;
  });
  display(filterArr);
};

function display(arr) {
  resultsNum.innerHTML = "";
  resultsNum.textContent = `${filterArr.length} results found`;
  board.innerHTML = ``;
  for (let element of arr) {
    const newDiv = document.createElement("div");
    if (element.selected) {
      newDiv.classList.add("selected");
    }
    newDiv.classList.add("fruitElement");
    newDiv.textContent = element.title;
    newDiv.style.backgroundImage = `url(./icons/${element.Image})`;
    newDiv.onclick = () => {
      element.selected = !element.selected;
      newDiv.classList.toggle("selected");
      // console.log(element, newDiv);
    };
    board.append(newDiv);
  }
}
