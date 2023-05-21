let lastTenpulls = [];
let lastNinetypulls = [];

//main gacha function, bread and butter for this to work
function gachaTime() {
  fetch("http://localhost:3000/gacha")
    .then((resp) => resp.json())
    .then((data) => {
      lastTenpulls = data.slice(-9);
      lastNinetypulls = data.slice(-89);
    });

  pityCounter++;
  primocatnipCount = primocatnipCount - 160;

  //creates an array of the last ten pull types
  let containsFourStar = lastTenpulls.map((element) => {
    return element.type;
  });

  //creates an array of the last ninety pull types
  let containsFiveStar = lastNinetypulls.map((element) => {
    return element.type;
  });

  //check if the last ten pulls contain a 4 star, if not guarantee a four star
  if (!containsFourStar.includes("Four Star") && containsFourStar.length === 9) {
    postGacha(fourStar[Math.floor(Math.random() * 4)]);
  }
  //check if the last ninety pulls contain a 5 star, if not guarantee a five star
  else if (
    !containsFiveStar.includes("Five Star") &&
    containsFiveStar.length === 89
  ) {
    postGacha(fiveStar[Math.floor(Math.random() * 3)]);
    pityCounter = 0;
  }
  //run the probability functions depending if you hit the 70th pull or not
  else {
    if (pityCounter < 70) {
      lastFiveStar != "Scarameowch"
        ? fiftyFiftyRandomOutcome()
        : guaranteedFiveStarRandomOutcome();
    } else {
      lastFiveStar != "Scarameowch"
        ? fiftyFiftySoftPity()
        : guaranteedFiveStarSoftPity();
    }
  }
}

//probability function of the fifty fifty five star before the 70th pull
function fiftyFiftyRandomOutcome() {
  let randomNumber = Math.random();

  if (randomNumber <= 0.1) {
    postGacha(fourStar[Math.floor(Math.random() * 4)]);
  } else if (randomNumber > 0.1 && randomNumber <= 0.106) {
    fiveStarFiftyFiftyProbability(randomNumber);
    pityCounter = 0;
  } else {
    postGacha(litterBox[Math.floor(Math.random() * 7)]);
  }
}

//soft pity probability function of the fifty fifty five star before the 70th pull
function fiftyFiftySoftPity() {
  pityAfterSeventy = pityAfterSeventy + 0.0001;
  let randomNumber = Math.random();

  if (randomNumber <= 0.1) {
    postGacha(fourStar[Math.floor(Math.random() * 4)]);
  } else if (randomNumber > 0.1 && randomNumber <= pityAfterSeventy) {
    fiveStarFiftyFiftyProbability(randomNumber);
    pityCounter = 0;
    pityAfterSeventy = 0.2;
  } else {
    postGacha(litterBox[Math.floor(Math.random() * 7)]);
  }
}

//five star fifty fifty probability conditionals for the above two functions
function fiveStarFiftyFiftyProbability(randomNumber) {
  if (randomNumber >= (pityAfterSeventy - 0.1) / 2 + 0.1) {
    postGacha(fiveStar[Math.floor(Math.random() * 7)]);
    lastFiveStar = fiveStar[Math.floor(Math.random() * 3)].name;
  } else {
    postGacha(promotionalFiveStar);
    lastFiveStar = promotionalFiveStar.name;
  }
}

//probability function of the guaranteed promotional character before the 70th pull
function guaranteedFiveStarRandomOutcome() {
  let randomNumber = Math.random();

  if (randomNumber <= 0.1) {
    postGacha(fourStar[Math.floor(Math.random() * 4)]);
  } else if (randomNumber > 0.1 && randomNumber <= 0.106) {
    postGacha(promotionalFiveStar);
    pityCounter = 0;
    lastFiveStar = promotionalFiveStar.name;
  } else {
    postGacha(litterBox[Math.floor(Math.random() * 7)]);
  }
}

//soft pity probability function of the guaranteed promotional character after the 70th pull
function guaranteedFiveStarSoftPity() {
  pityAfterSeventy = pityAfterSeventy + 0.0001;
  let randomNumber = Math.random();

  if (randomNumber <= 0.1) {
    postGacha(fourStar[Math.floor(Math.random() * 4)]);
  } else if (randomNumber > 0.1 && randomNumber <= pityAfterSeventy) {
    postGacha(promotionalFiveStar);
    pityCounter = 0;
    pityAfterSeventy = 0.2;
    lastFiveStar = promotionalFiveStar.name;
  } else {
    postGacha(litterBox[Math.floor(Math.random() * 7)]);
  }
}

function postGacha(data) {
  let month = new Date().getMonth() + 1;

  let gachaData = {
    name: data.name,
    type: data.type,
    basedOn: data.basedOn,
    birthday: data.birthday,
    specialDish: data.specialDish,
    releaseDate: data.releaseDate,
    quote: data.quote,
    image: data.image,
    timestamp:
      String(month).padStart(2, "0") +
      "-" +
      String(new Date().getDate()).padStart(2, "0") +
      "-" +
      String(new Date().getFullYear()).padStart(2, "0") +
      " " +
      String(new Date().getHours()).padStart(2, "0") +
      ":" +
      String(new Date().getMinutes()).padStart(2, "0") +
      ":" +
      String(new Date().getSeconds()).padStart(2, "0"),
    order: data.order
  };
  fetch("http://localhost:3000/gacha", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Accept: "application/json",
    },
    body: JSON.stringify(gachaData),
  })
  .then(resp => resp.json())
  .then(json => console.log(json));
}
