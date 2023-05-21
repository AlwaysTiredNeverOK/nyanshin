let dataLimit;
let rowOneIndex = 0;
let rowTwoIndex = 1;
let rowThreeIndex = 2;
let rowFourIndex = 3;
let rowFiveIndex = 4;

const rowOneName = document.getElementById("row-one-name");
const rowOneType = document.getElementById("row-one-type");
const rowOneTime = document.getElementById("row-one-time");
const rowTwoName = document.getElementById("row-two-name");
const rowTwoType = document.getElementById("row-two-type");
const rowTwoTime = document.getElementById("row-two-time");
const rowThreeName = document.getElementById("row-three-name");
const rowThreeType = document.getElementById("row-three-type");
const rowThreeTime = document.getElementById("row-three-time");
const rowFourName = document.getElementById("row-four-name");
const rowFourType = document.getElementById("row-four-type");
const rowFourTime = document.getElementById("row-four-time");
const rowFiveName = document.getElementById("row-five-name");
const rowFiveType = document.getElementById("row-five-type");
const rowFiveTime = document.getElementById("row-five-time");

const prevPage = document.getElementById("previous-page");
const nextPage = document.getElementById("next-page");

prevPage.style.opacity = 0.5;
prevPage.style.cursor = "default";

prevPage.addEventListener("click", () => {
  if (rowOneIndex < 5) {
    prevPage.style.opacity = 0.5;
	prevPage.style.cursor = "default";
  } else {
    nextPage.style.opacity = 1;
	nextPage.style.cursor = "pointer";
    rowOneIndex -= 5;
    rowTwoIndex -= 5;
    rowThreeIndex -= 5;
    rowFourIndex -= 5;
    rowFiveIndex -= 5;
    historyList();
  }
});

nextPage.addEventListener("click", () => {
  if (rowOneIndex >= dataLimit - 5) {
    nextPage.style.opacity = 0.5;
	nextPage.style.cursor = "default";
  } else {
    prevPage.style.opacity = 1;
	prevPage.style.cursor = "pointer";
    rowOneIndex += 5;
    rowTwoIndex += 5;
    rowThreeIndex += 5;
    rowFourIndex += 5;
    rowFiveIndex += 5;
    historyList();
  }
});

function historyList() {
  fetch("http://localhost:3000/gacha")
    .then((resp) => resp.json())
    .then((data) => {
      dataLimit = data.length;
      data[rowOneIndex]
        ? (rowOneName.innerText = `${data[rowOneIndex].name}`)
        : (rowOneName.innerText = "No data");
      data[rowOneIndex]
        ? (rowOneType.innerText = `${data[rowOneIndex].type}`)
        : (rowOneType.innerText = "No data");
      data[rowOneIndex]
        ? (rowOneTime.innerText = `${data[rowOneIndex].timestamp}`)
        : (rowOneTime.innerText = "No data");
      data[rowTwoIndex]
        ? (rowTwoName.innerText = `${data[rowTwoIndex].name}`)
        : (rowTwoName.innerText = "No data");
      data[rowTwoIndex]
        ? (rowTwoType.innerText = `${data[rowTwoIndex].type}`)
        : (rowTwoType.innerText = "No data");
      data[rowTwoIndex]
        ? (rowTwoTime.innerText = `${data[rowTwoIndex].timestamp}`)
        : (rowTwoTime.innerText = "No data");
      data[rowThreeIndex]
        ? (rowThreeName.innerText = `${data[rowThreeIndex].name}`)
        : (rowThreeName.innerText = "No data");
      data[rowThreeIndex]
        ? (rowThreeType.innerText = `${data[rowThreeIndex].type}`)
        : (rowThreeType.innerText = "No data");
      data[rowThreeIndex]
        ? (rowThreeTime.innerText = `${data[rowThreeIndex].timestamp}`)
        : (rowThreeTime.innerText = "No data");
      data[rowFourIndex]
        ? (rowFourName.innerText = `${data[rowFourIndex].name}`)
        : (rowFourName.innerText = "No data");
      data[rowFourIndex]
        ? (rowFourType.innerText = `${data[rowFourIndex].type}`)
        : (rowFourType.innerText = "No data");
      data[rowFourIndex]
        ? (rowFourTime.innerText = `${data[rowFourIndex].timestamp}`)
        : (rowFourTime.innerText = "No data");
      data[rowFiveIndex]
        ? (rowFiveName.innerText = `${data[rowFiveIndex].name}`)
        : (rowFiveName.innerText = "No data");
      data[rowFiveIndex]
        ? (rowFiveType.innerText = `${data[rowFiveIndex].type}`)
        : (rowFiveType.innerText = "No data");
      data[rowFiveIndex]
        ? (rowFiveTime.innerText = `${data[rowFiveIndex].timestamp}`)
        : (rowFiveTime.innerText = "No data");
    });
}
