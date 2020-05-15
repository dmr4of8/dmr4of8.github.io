const getDate = document.createElement('p');
getDate.innerText = new Date().toDateString();
const dateElement = document.getElementsByTagName('footer')[0];
dateElement.appendChild(getDate)


const menuButton = document.querySelector(".item-1");
const hamburgerMenu = document.querySelector(".hamburger-menu");

menuButton.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('squashed')
}, false)