// // All selectores
// let btn = document.querySelector("#myBtn");
// let inputText = document.getElementById("get-text");

// let ulList = document.querySelector("#list");
// // let items = document.querySelector(".item");

// btn.addEventListener("click", () => {
//   //console.log(inputText.value);
//   addItems();
// });
// // create ul list item
// function addItems() {
//   let listItems = document.createElement("li");
//   listItems.innerHTML = inputText.value;
//   ulList.appendChild(listItems);
//   inputText.value = "";
//   let span = document.createElement("span");
//   span.innerHTML = "\u00d7";
//   listItems.appendChild(span);
// }
// function removeListItem(){

// }

// // Delete list item button

let btn = document.querySelector("#btn");
let inputText = document.querySelector("#input-text");
let ulList = document.querySelector(".list-item");
let ulBox = document.querySelector(".item-box");

//event listener
btn.addEventListener("click", () => {
  if (inputText.value !== "") {
    addItems();
  } else {
    alert("Please enter your taxk:");
  }
});
//add-items
function addItems() {
  let li = document.createElement("li");
  li.innerHTML = inputText.value;
  ulList.appendChild(li);

  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
  inputText.value = "";
  saveData();
}

ulBox.addEventListener("click", (e) => {
  // console.log(e.target.tagName);
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});

function saveData() {
  localStorage.setItem("data", ulList.innerHTML);
}

function showData() {
  ulList.innerHTML = localStorage.getItem("data");
}
showData();
