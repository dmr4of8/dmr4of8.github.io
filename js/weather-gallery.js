const images = document.getElementsByClassName('lazy-img');

function changeImg(item) {
    item.src = item.dataset.src;
    return;
} 

const imgObserver = new IntersectionObserver(entries => {
    entries.forEach(item => {
    if (item.isIntersecting) {
        item.target.classList.add('transition');
        changeImg(item.target);
        imgObserver.unobserve(item.target);
        return;
    }
    else {
        console.log('off-screen');
        return;
    }
});
});

for (var image of images) {
    imgObserver.observe(image);
}