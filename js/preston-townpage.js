const getDate = document.createElement('p');
getDate.innerText = new Date().toDateString();
const dateElement = document.getElementsByTagName('footer')[0];
dateElement.appendChild(getDate)

const menuButton = document.querySelector(".item-1");
const hamburgerMenu = document.querySelector(".hamburger-menu");

menuButton.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('squashed')
}, false)

const today = new Date();
const dayNum = today.getDay();

const alertBanner = document.querySelector(".important-alert");
if (dayNum !== 5) {
    alertBanner.classList.add("hidden");
}

const appID = '75ec8f9280bbd969ed410bd87a0de696';
const prestonID = '5604473';
const apiURL = `http://api.openweathermap.org/data/2.5/weather?id=${prestonID}&units=imperial&appid=${appID}`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById("currently").innerText = jsObject.weather[0].main;
    document.getElementById("high-temp").innerText = jsObject.main.temp_max;
    document.getElementById("humidity").innerText = jsObject.main.humidity;
    document.getElementById("wind-speed").innerText = jsObject.wind.speed;
});

var weekdays = new Array(7)
weekdays[0] = "Sun";
weekdays[1] = "Mon";
weekdays[2] = "Tue";
weekdays[3] = "Wed";
weekdays[4] = "Thu";
weekdays[5] = "Fri";
weekdays[6] = "Sat";

const forecastURL = `http://api.openweathermap.org/data/2.5/forecast?id=${prestonID}&units=imperial&appid=${appID}`;
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    for (i=0; i < jsObject.list.length; i++) {
        if (jsObject.list[i].dt_txt.includes("18:00:00")) {
            const forecastDate = new Date(jsObject.list[i].dt_txt);
            const today = new Date();
            const forecastNumber = Math.ceil((forecastDate - today) / (1000 * 3600 * 24));
            document.getElementById(`fore-${forecastNumber}`).innerText = Math.floor(jsObject.list[i].main.temp);
            document.getElementById(`day-${forecastNumber}`).innerText = weekdays[forecastDate.getDay()];
            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
            const desc = jsObject.list[i].weather[0].description;
            document.getElementById(`icon-${forecastNumber}`).setAttribute('src', imagesrc);  
            document.getElementById(`icon-${forecastNumber}`).setAttribute('alt', desc);
        }
    }
});


