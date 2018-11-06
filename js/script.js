function toggleMenu() {
    document.querySelector('.side-bar').classList.toggle('side-bar-hidden')
}

document.querySelector('.hamburger').addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu()
});