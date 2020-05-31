const windChill = document.getElementById("wind-chill");
const oldInnerText = windChill.innerText;

const high = parseInt(document.getElementById("high-temp").innerText);
const wind = parseInt(document.getElementById("wind-speed").innerText);
var s = Math.pow(wind,0.16);
var wc = 35.74 + (0.6215*high) + (0.4275*high*s) - (35.75*s);

if (high > 50 && wind < 3) {
    windChill.innerText = `${oldInnerText} N/A`;
}
else {
    windChill.innerText = `${oldInnerText} ${Math.round(wc)}°F`;
}