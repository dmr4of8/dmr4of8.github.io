function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}

const severityRater = document.getElementById("storm-severity");

severityRater.addEventListener("input", () => {
  adjustRating(severityRater.value);
});