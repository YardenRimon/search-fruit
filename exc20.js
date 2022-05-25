const input = document.querySelector(".input-box");
const listUl = document.querySelector(".list-ul");
const addButton = document.querySelector(".add-button");
const arr = [
  { title: "apple", id: 1 },
  { title: "banana", id: 2 },
  { title: "peach", id: 3 },
  { title: "grapes", id: 4 },
  { title: "cherry", id: 5 },
  {title: "watermelon", id: 5}
];
let i = arr.length;
displayArr(arr);

input.oninput = function () {
  const filterArr = arr.filter(function (e) {
    return e.title.includes(input.value);
  });
  displayArr(filterArr);
};

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addButton.click();
  }
});

function addTask() {
  let inputText = input.value;
  if (inputText !== "") {
    arr.push({ title: inputText, id: i, isDone: false });
    input.value = "";
    i++;
  }
  displayArr(arr);
}

function displayArr(arr) {
  listUl.innerHTML = ``;
  if (arr.length === 0) {
    const alert = document.createElement("h2");
    // alert.classList.add = "non";
    alert.textContent = "No results found!";
    listUl.append(alert);
  }
  for (let element of arr) {
    const newLi = document.createElement("li");
    let newLiText = document.createElement("h3");
    newLiText.textContent = element.title;
    newLi.prepend(newLiText);
    listUl.prepend(newLi);
  }
}
