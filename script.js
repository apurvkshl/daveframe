let currentSlide = 1;

function showSlide(slideNumber) {
    document.getElementById(`slide${currentSlide}`).classList.add('hidden');
    document.getElementById(`slide${slideNumber}`).classList.remove('hidden');
    currentSlide = slideNumber;
}

document.body.addEventListener('click', () => {
    const nextSlide = currentSlide === 1 ? 2 : 1;
    showSlide(nextSlide);
});
