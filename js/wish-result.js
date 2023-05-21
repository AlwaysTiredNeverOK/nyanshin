const playAgainButton = document.getElementById("play-again");

function wishResult() {
  fetch("http://localhost:3000/gacha")
    .then((resp) => resp.json())
    .then((data) => {
      document.getElementById("character-result").innerText = `${
        data[data.length - 1].name
      }`;
      document.getElementById("character-line").innerText = `${
        data[data.length - 1].quote
      }`;
      document.getElementById("character-image").src = `${
        data[data.length - 1].image
      }`;
    });
}

playAgainButton.addEventListener("click", () => {
  gachaTime();
  wishResult();
});
