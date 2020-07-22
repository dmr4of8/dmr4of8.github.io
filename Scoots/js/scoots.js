const getDate = document.createElement("p");
getDate.innerText = new Date().toDateString();
const dateElement = document.getElementsByTagName("footer")[0];
dateElement.appendChild(getDate);
const pageTitle = document.getElementsByClassName("page-title")[0].innerText;
const menuButton = document.querySelector(".item-1");
const hamburgerMenu = document.querySelector(".hamburger-menu");

menuButton.addEventListener(
  "click",
  () => {
    hamburgerMenu.classList.toggle("squashed");
  },
  false
);

fetch("./data/rental.json")
  .then((response) => response.json())
  .then((jsObject) => {
    if (pageTitle == "Rentals") {
    for (i = 0; i < jsObject.rentals.length; i++) {
      let row = document.createElement("tr");
      let name = document.createElement("td")
      name.innerText = jsObject.rentals[i].name;
      let person = document.createElement("td")
      person.innerText = jsObject.rentals[i].persons;
      let rhd = document.createElement("td")
      rhd.innerText = "$" + jsObject.rentals[i].resHalf;
      let rfd = document.createElement("td")
      rfd.innerText = "$" + jsObject.rentals[i].resFull;
      let wihd = document.createElement("td")
      wihd.innerText = "$" + jsObject.rentals[i].walkHalf;
      let wifd = document.createElement("td")
      wifd.innerText = "$" + jsObject.rentals[i].walkFull;
      row.appendChild(name);
      row.appendChild(person);
      row.appendChild(rhd);
      row.appendChild(rfd);
      row.appendChild(wihd);
      row.appendChild(wifd);
      document.querySelector("tbody.rental-body").appendChild(row);
    }
  }
  });

// const today = new Date();
// const dayNum = today.getDay();

// const alertBanner = document.querySelector(".important-alert");
// if (dayNum !== 5) {
//   alertBanner.classList.add("hidden");
// }

// const appID = "75ec8f9280bbd969ed410bd87a0de696";
// let townID = ""
// switch(pageTitle) {
//     case "Fish Haven Idaho":
//         townID = "5585000"
//         break;
//     case "Soda Springs Idaho":
//         // Caribou county doesn't have an ID I could find so I used Bear Lake which is adjacent
//         townID = "5585000"
//         break;
//     case "Preston Idaho":
//         townID =  "5604473"
//         break;
//     default:
//         townID = "5604473";
// }

// const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${townID}&units=imperial&appid=${appID}`;
// fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     document.getElementById("currently").innerText = jsObject.weather[0].main;
//     document.getElementById("high-temp").innerText = jsObject.main.temp_max;
//     document.getElementById("humidity").innerText = jsObject.main.humidity;
//     document.getElementById("wind-speed").innerText = jsObject.wind.speed;
//   });

// var weekdays = new Array(7);
// weekdays[0] = "Sun";
// weekdays[1] = "Mon";
// weekdays[2] = "Tue";
// weekdays[3] = "Wed";
// weekdays[4] = "Thu";
// weekdays[5] = "Fri";
// weekdays[6] = "Sat";

// const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${townID}&units=imperial&appid=${appID}`;
// fetch(forecastURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     for (i = 0; i < jsObject.list.length; i++) {
//       if (jsObject.list[i].dt_txt.includes("18:00:00")) {
//         const forecastDate = new Date(jsObject.list[i].dt_txt);
//         const today = new Date();
//         const forecastNumber = Math.ceil(
//           (forecastDate - today) / (1000 * 3600 * 24)
//         );
//         document.getElementById(
//           `fore-${forecastNumber}`
//         ).innerText = Math.floor(jsObject.list[i].main.temp);
//         document.getElementById(`day-${forecastNumber}`).innerText =
//           weekdays[forecastDate.getDay()];
//         const imagesrc =
//           "https://openweathermap.org/img/w/" +
//           jsObject.list[i].weather[0].icon +
//           ".png";
//         const desc = jsObject.list[i].weather[0].description;
//         document
//           .getElementById(`icon-${forecastNumber}`)
//           .setAttribute("src", imagesrc);
//         document
//           .getElementById(`icon-${forecastNumber}`)
//           .setAttribute("alt", desc);
//       }
//     }
//   });

// const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     const towns = jsonObject["towns"];
//     for (let i = 0; i < towns.length; i++) {
//       if (pageTitle.includes(towns[i].name)) {
//         let card = document.createElement("section");
//         let h3 = document.createElement("h3");
//         h3.textContent = towns[i].name + " Events";
//         card.appendChild(h3);
//         for (let j = 0; j < towns[i].events.length; j++) {
//             let event = document.createElement("p");
//             event.textContent = towns[i].events[j];
//             card.appendChild(event);
//         }
//         document.querySelector("div.event-card").appendChild(card);
//       }
//       if (pageTitle == "Home") {
//           let image = null;
//         if (towns[i].name == "Fish Haven") {
//             image = document.querySelector(".fish-haven-picture");
//             image.setAttribute('src', towns[i].photo);
//             image.setAttribute('alt', towns[i].name);
//             const name = document.querySelectorAll(".town-name.fh");
//             name[0].textContent = towns[i].name;
//             const slogan = document.querySelectorAll(".town-slogan.fh");
//             slogan[0].textContent = towns[i].motto;
//             const year = document.querySelectorAll(".year.fh");
//             year[0].textContent = towns[i].yearFounded;
//             const pop = document.querySelectorAll(".pop-num.fh");
//             pop[0].textContent = towns[i].currentPopulation;
//             const rain = document.querySelectorAll(".rain-inches.fh");
//             rain[0].textContent = towns[i].averageRainfall;
//         }
//         if (towns[i].name == "Soda Springs") {
//             image = document.querySelector(".soda-springs-picture");
//             image.setAttribute('src', towns[i].photo);
//             image.setAttribute('alt', towns[i].name);
//             const name = document.querySelectorAll(".town-name.ss");
//             console.log(name);
//             name[0].textContent = towns[i].name;
//             const slogan = document.querySelectorAll(".town-slogan.ss");
//             slogan[0].textContent = towns[i].motto;
//             const year = document.querySelectorAll(".year.ss");
//             year[0].textContent = towns[i].yearFounded;
//             const pop = document.querySelectorAll(".pop-num.ss");
//             pop[0].textContent = towns[i].currentPopulation;
//             const rain = document.querySelectorAll(".rain-inches.ss");
//             rain[0].textContent = towns[i].averageRainfall;
//         }
//         if (towns[i].name == "Preston")    {
//             image = document.querySelector(".preston-picture");
//             image.setAttribute('src', towns[i].photo);
//             image.setAttribute('alt', towns[i].name);
//             const name = document.querySelectorAll(".town-name.pres");
//             name[0].textContent = towns[i].name;
//             const slogan = document.querySelectorAll(".town-slogan.pres");
//             slogan[0].textContent = towns[i].motto;
//             const year = document.querySelectorAll(".year.pres");
//             year[0].textContent = towns[i].yearFounded;
//             const pop = document.querySelectorAll(".pop-num.pres");
//             pop[0].textContent = towns[i].currentPopulation;
//             const rain = document.querySelectorAll(".rain-inches.pres");
//             rain[0].textContent = towns[i].averageRainfall;
//         }
//       }
//     }
//   });
