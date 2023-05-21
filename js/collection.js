let unlockedData = [];
let unlockedNonTrash = [];

const unlockedScarameowch = document.getElementById("Scarameowch");
const unlockedNyanderer = document.getElementById("Nyanderer");
const unlockedKiddyCat = document.getElementById("KiddyCat");
const unlockedRexLapurr = document.getElementById("RexLapurr");
const unlockedCateya = document.getElementById("Cat-eya");
const unlockedNotaCat = document.getElementById("NotaCat");
const unlockedMissHinya = document.getElementById("MissHinya");
const unlockedActuallyaBirb = document.getElementById("ActuallyaBirb");

const collectionName = document.getElementById("collection-name");
const collectionType = document.getElementById("collection-type");
const collectionQuote = document.getElementById("collection-quote");
const collectionBasedOn = document.getElementById("collection-based-on");
const collectionBirthday = document.getElementById("collection-birthday");
const collectionSpecialDish = document.getElementById(
  "collection-special-dish"
);
const collectionReleaseDate = document.getElementById(
  "collection-release-date"
);
const collectionImage = document.getElementById("collection-image");

function unlockedCharacters() {
  fetch("http://localhost:3000/gacha")
    .then((resp) => resp.json())
    .then((data) => {
      unlockedData = data.map((item) => {
        return item.name;
      });
      unlockedData.includes("Scarameowch")
        ? (unlockedScarameowch.innerText = "Scarameowch")
        : (unlockedScarameowch.disabled = true);
      unlockedData.includes("Nyanderer")
        ? (unlockedNyanderer.innerText = "Nyanderer")
        : (unlockedNyanderer.disabled = true);
      unlockedData.includes("Kiddy Cat")
        ? (unlockedKiddyCat.innerText = "Kiddy Cat")
        : (unlockedKiddyCat.disabled = true);
      unlockedData.includes("Rex Lapurr")
        ? (unlockedRexLapurr.innerText = "Rex \n Lapurr")
        : (unlockedRexLapurr.disabled = true);
      unlockedData.includes("Cat-eya")
        ? (unlockedCateya.innerText = "Cat-eya")
        : (unlockedCateya.disabled = true);
      unlockedData.includes("Not a Cat")
        ? (unlockedNotaCat.innerText = "Not a Cat")
        : (unlockedNotaCat.disabled = true);
      unlockedData.includes("Miss Hinya~")
        ? (unlockedMissHinya.innerText = "Miss Hinya~")
        : (unlockedMissHinya.disabled = true);
      unlockedData.includes("Actually a Birb")
        ? (unlockedActuallyaBirb.innerText = "Actually \n a Birb")
        : (unlockedActuallyaBirb.disabled = true);

      unlockedNonTrash = data.filter((item) => {
        return item.order || item.order === 0
      }).sort((a,b) => {
        return a.order - b.order
      })

      collectionName.innerText = `${unlockedNonTrash[0].name}`
      collectionType.innerText = `${unlockedNonTrash[0].type}`;
      collectionQuote.innerText = `${unlockedNonTrash[0].quote}`;
      collectionBasedOn.innerText = `Based on: ${unlockedNonTrash[0].basedOn}`;
      collectionBirthday.innerText = `Birthday: ${unlockedNonTrash[0].birthday}`;
      collectionSpecialDish.innerText = `Special Dish: ${unlockedNonTrash[0].specialDish}`;
      collectionReleaseDate.innerText = `Release Date: ${unlockedNonTrash[0].releaseDate}`;
      collectionImage.src = `${unlockedNonTrash[0].image}`;
    });
}



unlockedScarameowch.addEventListener("click", () => {
  if (unlockedScarameowch.innerText === "Not yet unlocked") {
    console.log("do nothing");
  } else {
    collectionName.innerText = `${promotionalFiveStar.name}`;
    collectionType.innerText = `${promotionalFiveStar.type}`;
    collectionQuote.innerText = `${promotionalFiveStar.quote}`;
    collectionBasedOn.innerText = `Based on: ${promotionalFiveStar.basedOn}`;
    collectionBirthday.innerText = `Birthday: ${promotionalFiveStar.birthday}`;
    collectionSpecialDish.innerText = `Special Dish: ${promotionalFiveStar.specialDish}`;
    collectionReleaseDate.innerText = `Release Date: ${promotionalFiveStar.releaseDate}`;
    collectionImage.src = `${promotionalFiveStar.image}`;
  }
});

unlockedNyanderer.addEventListener("click", () => {
  if (unlockedNyanderer.innerText === "Not yet unlocked") {
    console.log("do nothing");
  } else {
    collectionName.innerText = `${fiveStar[0].name}`;
    collectionType.innerText = `${fiveStar[0].type}`;
    collectionQuote.innerText = `${fiveStar[0].quote}`;
    collectionBasedOn.innerText = `Based on: ${fiveStar[0].basedOn}`;
    collectionBirthday.innerText = `Birthday: ${fiveStar[0].birthday}`;
    collectionSpecialDish.innerText = `Special Dish: ${fiveStar[0].specialDish}`;
    collectionReleaseDate.innerText = `Release Date: ${fiveStar[0].releaseDate}`;
    collectionImage.src = `${fiveStar[0].image}`;
  }
});

unlockedKiddyCat.addEventListener("click", () => {
  if (unlockedKiddyCat.innerText === "Not yet unlocked") {
    console.log("do nothing");
  } else {
    collectionName.innerText = `${fiveStar[1].name}`;
    collectionType.innerText = `${fiveStar[1].type}`;
    collectionQuote.innerText = `${fiveStar[1].quote}`;
    collectionBasedOn.innerText = `Based on: ${fiveStar[1].basedOn}`;
    collectionBirthday.innerText = `Birthday: ${fiveStar[1].birthday}`;
    collectionSpecialDish.innerText = `Special Dish: ${fiveStar[1].specialDish}`;
    collectionReleaseDate.innerText = `Release Date: ${fiveStar[1].releaseDate}`;
    collectionImage.src = `${fiveStar[1].image}`;
  }
});

unlockedRexLapurr.addEventListener("click", () => {
  if (unlockedRexLapurr.innerText === "Not yet unlocked") {
    console.log("do nothing");
  } else {
    collectionName.innerText = `${fiveStar[2].name}`;
    collectionType.innerText = `${fiveStar[2].type}`;
    collectionQuote.innerText = `${fiveStar[2].quote}`;
    collectionBasedOn.innerText = `Based on: ${fiveStar[2].basedOn}`;
    collectionBirthday.innerText = `Birthday: ${fiveStar[2].birthday}`;
    collectionSpecialDish.innerText = `Special Dish: ${fiveStar[2].specialDish}`;
    collectionReleaseDate.innerText = `Release Date: ${fiveStar[2].releaseDate}`;
    collectionImage.src = `${fiveStar[2].image}`;
  }
});

unlockedCateya.addEventListener("click", () => {
  if (unlockedCateya.innerText === "Not yet unlocked") {
    console.log("do nothing");
  } else {
    collectionName.innerText = `${fourStar[0].name}`;
    collectionType.innerText = `${fourStar[0].type}`;
    collectionQuote.innerText = `${fourStar[0].quote}`;
    collectionBasedOn.innerText = `Based on: ${fourStar[0].basedOn}`;
    collectionBirthday.innerText = `Birthday: ${fourStar[0].birthday}`;
    collectionSpecialDish.innerText = `Special Dish: ${fourStar[0].specialDish}`;
    collectionReleaseDate.innerText = `Release Date: ${fourStar[0].releaseDate}`;
    collectionImage.src = `${fourStar[0].image}`;
  }
});

unlockedNotaCat.addEventListener("click", () => {
  if (unlockedNotaCat.innerText === "Not yet unlocked") {
    console.log("do nothing");
  } else {
    collectionName.innerText = `${fourStar[1].name}`;
    collectionType.innerText = `${fourStar[1].type}`;
    collectionQuote.innerText = `${fourStar[1].quote}`;
    collectionBasedOn.innerText = `Based on: ${fourStar[1].basedOn}`;
    collectionBirthday.innerText = `Birthday: ${fourStar[1].birthday}`;
    collectionSpecialDish.innerText = `Special Dish: ${fourStar[1].specialDish}`;
    collectionReleaseDate.innerText = `Release Date: ${fourStar[1].releaseDate}`;
    collectionImage.src = `${fourStar[1].image}`;
  }
});

unlockedMissHinya.addEventListener("click", () => {
  if (unlockedMissHinya.innerText === "Not yet unlocked") {
    console.log("do nothing");
  } else {
    collectionName.innerText = `${fourStar[2].name}`;
    collectionType.innerText = `${fourStar[2].type}`;
    collectionQuote.innerText = `${fourStar[2].quote}`;
    collectionBasedOn.innerText = `Based on: ${fourStar[2].basedOn}`;
    collectionBirthday.innerText = `Birthday: ${fourStar[2].birthday}`;
    collectionSpecialDish.innerText = `Special Dish: ${fourStar[2].specialDish}`;
    collectionReleaseDate.innerText = `Release Date: ${fourStar[2].releaseDate}`;
    collectionImage.src = `${fourStar[2].image}`;
  }
});

unlockedActuallyaBirb.addEventListener("click", () => {
  if (unlockedActuallyaBirb.innerText === "Not yet unlocked") {
    console.log("do nothing");
  } else {
    collectionName.innerText = `${fourStar[3].name}`;
    collectionType.innerText = `${fourStar[3].type}`;
    collectionQuote.innerText = `${fourStar[3].quote}`;
    collectionBasedOn.innerText = `Based on: ${fourStar[3].basedOn}`;
    collectionBirthday.innerText = `Birthday: ${fourStar[3].birthday}`;
    collectionSpecialDish.innerText = `Special Dish: ${fourStar[3].specialDish}`;
    collectionReleaseDate.innerText = `Release Date: ${fourStar[3].releaseDate}`;
    collectionImage.src = `${fourStar[3].image}`;
  }
});
