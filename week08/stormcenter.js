function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}

// const thanks = document.getElementsByClassName('thanks-main');

// console.log(thanks.innerHTML);

// function submitFunction() {
//   // document.getElementsByClassName("storm-center-main").innerHTML = thanks.innerHTML;
//   window.location.replace("thanks.html");
// }

// console.log(thanks.html);






// const severityRater = document.getElementById("storm-severity");

// severityRater.addEventListener("input", () => {
//   adjustRating(severityRater.value);
// });






const submitButton = document.getElementById("submit");
console.log(submitButton)
submitButton.addEventListener("submit", () => {
  window.location.replace("dmr4of8.github.io/week08/thanks.html");
});
console.log(window.location);
