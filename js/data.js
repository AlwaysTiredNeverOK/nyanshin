//in game currency to pull
let primocatnipCount = 0;

//money spent without taking taxes into account
let moneySpent = 0;

//array that stores all the results
let resultArray = [];

//last five star acquired
let lastFiveStar;

//promotional five star scarameowch
const promotionalFiveStar = {
  name: "Scarameowch",
  type: "Five Star",
  basedOn: "Scaramouche",
  birthday: "January 3rd",
  specialDish: "Shimi Chazuke",
  releaseDate: "December 7th, 2022",
  quote: "I'm trying to figure out a way to get rid of you so I can go commit more attrocities. ... Wait, did you think I was serious?",
  image:
    "./images/scarameowch.PNG",
  order: 0
};

//sample five stars
const fiveStar = [
  {
    name: "Nyanderer",
    type: "Five Star",
    basedOn: "Scaramouche",
    birthday: "January 3rd",
    specialDish: "Shimi Chazuke",
    releaseDate: "December 7th, 2022",
    quote:
      "I'm trying to figure out a way to get rid of you so I can go commit atrocities. ...Wait, did you think I was being serious?",
    image:
      "./images/nyanderer.png",
    order: 1
  },
  {
    name: "Kiddy Cat",
    type: "Five Star",
    basedOn: "Tartaglia",
    birthday: "July 20th",
    specialDish: "A Prize Catch",
    releaseDate: "October 13th, 2021",
    quote:
      "This place is pretty dead, by which I means, there is nothing to kill.",
    image:
      "./images/kiddy-cat.png",
    order: 2
  },
  {
    name: "Rex Lapurr",
    type: "Five Star",
    basedOn: "Zhongli",
    birthday: "December 31st",
    specialDish: "Slow-Cooked Bamboo Shoot Soup",
    releaseDate: "January 25th, 2022",
    quote:
      "Osmanthus wine taste the same as I remember... But where are those who share the memory?",
    image: "./images/rex-lapurr.png",
    order: 3
  },
];

//sample four stars
const fourStar = [
  {
    name: "Cat-eya",
    type: "Four Star",
    basedOn: "Kaeya",
    birthday: "November 30th",
    specialDish: "Fruity Skewers",
    releaseDate: "September 28th, 2020",
    quote:
      "Lonely? Me? Not with someone here nagging me all the time, that's for sure.",
    image:
      "./images/cat-eya.png",
    order: 4
  },
  {
    name: "Not a Cat",
    type: "Four Star",
    basedOn: "Razor",
    birthday: "September 9th",
    specialDish: "Puppy-Paw Hash Brown",
    releaseDate: "September 28th, 2020",
    quote: "You smell... *sniff* nice! Let's hunt.",
    image:
      "./images/not-a-cat.png",
    order: 5
  },
  {
    name: "Miss Hinya~",
    type: "Four Star",
    basedOn: "Gorou",
    birthday: "May 18th",
    specialDish: "Victorious Legend",
    releaseDate: "December 14th, 2021",
    quote:
      "It'd be nice to just lie in the sun... Ahem, but I must set an example for the others.",
    image: "./images/miss-hinya.png",
    order: 6
  },
  {
    name: "Actually a Birb",
    type: "Four Star",
    basedOn: "Kujou Sara",
    birthday: "July 14th",
    specialDish: "Faith Eternal Omelette",
    releaseDate: "September 1st, 2021",
    quote:
      "Do you know what the most distinctively Inazuman item of all is? It is a lacquerware carving of the Statue of Her Excellency, the Almighty Narukami Ogosho, God of Thunder. I have five.",
    image:
      "./images/actually-a-birb.png",
    order: 7
  },
];

//trash you get when you don't get four or five stars
const litterBox = [
  {
    name: "Anemo Litter Box",
    type: "Trash",
    basedOn: "N/A",
    birthday: "N/A",
    specialDish: "N/A",
    releaseDate: "N/A",
    quote: "A litter box with sand scattered everywhere...",
    image:
      "./images/anemo-box.png",
  },
  {
    name: "Geo Litter Box",
    type: "Trash",
    basedOn: "N/A",
    birthday: "N/A",
    specialDish: "N/A",
    releaseDate: "N/A",
    quote: "A litter box full of lumpy stones...",
    image:
      "./images/geo-box.png",
  },
  {
    name: "Electro Litter Box",
    type: "Trash",
    basedOn: "N/A",
    birthday: "N/A",
    specialDish: "N/A",
    releaseDate: "N/A",
    quote: "A litterbox that's shockingly smelly...",
    image:
      "./images/electro-box.png",
  },
  {
    name: "Dendro Litter Box",
    type: "Trash",
    basedOn: "N/A",
    birthday: "N/A",
    specialDish: "N/A",
    releaseDate: "N/A",
    quote: "WHO IS GROWING FLOWERS IN MY LITTER BOX?!",
    image:
      "./images/dendro-box.png",
  },
  {
    name: "Hydro Litter Box",
    type: "Trash",
    basedOn: "N/A",
    birthday: "N/A",
    specialDish: "N/A",
    releaseDate: "N/A",
    quote: "A very... wet litter box...",
    image:
      "./images/hydro-box.png",
  },
  {
    name: "Pyro Litter Box",
    type: "Trash",
    basedOn: "N/A",
    birthday: "N/A",
    specialDish: "N/A",
    releaseDate: "N/A",
    quote: "Is... Is that charcoal in the litterbox...?!",
    image:
      "./images/pyro-box.png",
  },
  {
    name: "Cryo Litter Box",
    type: "Trash",
    basedOn: "N/A",
    birthday: "N/A",
    specialDish: "N/A",
    releaseDate: "N/A",
    quote: "Why are there ice-cubes in here?!",
    image:
      "./images/cryo-box.png",
  },
];

//counts the number of pulls you've failed to get a five star.
let pityCounter = 0;

//percent chance increase after you've reached 70 pulls.
let pityAfterSeventy = 0.2;

//button for a one pull attempt
const gachaButton = document.getElementById("gacha");

//buttons for top-up
const primoOption1 = document.getElementById("primooption1");
const primoOption2 = document.getElementById("primooption2");
const primoOption3 = document.getElementById("primooption3");
const primoOption4 = document.getElementById("primooption4");
const primoOption5 = document.getElementById("primooption5");
const primoOption6 = document.getElementById("primooption6");

//displays
const primocatnipDisplay = document.getElementById("primocatnip-count");
const moneySpentDisplay = document.getElementById("money-spent");
const gachaResultsDisplay = document.getElementById("gacha-results");

//click event for the one pull button
gachaButton.addEventListener("click", () => {
  	gachaTime();
});
