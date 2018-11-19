function toggleMenu() {
    document.querySelector('.side-bar').classList.toggle('side-bar-hidden')
}

document.querySelector('.hamburger').addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu()
});

document.getElementById('btnLogin').addEventListener('click', function() {
      document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener('click', function (){
     document.querySelector('.bg-modal').style.display = "none";
});

document.getElementById('btnSide').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = "flex";
});

document.getElementById('chatPop').addEventListener('click', function () {
    document.querySelector('.chat-modual').style.display = "flex";
});

document.querySelector('.close-msg').addEventListener('click', function () {
    document.querySelector('.chat-modual').style.display = "none";
});

document.getElementById('quitBtn').addEventListener('click', function () {
    document.querySelector('.quit-modual').style.display = "flex";
});
document.querySelector('.cross-btn').addEventListener('click', function () {
    document.querySelector('.quit-modual').style.display = "none";
});

document.querySelector('.cancel-btn').addEventListener('click', function () {
    document.querySelector('.quit-modual').style.display = "none";
});

document.getElementById('side-quit').addEventListener('click', function () {
    document.querySelector('.quit-modual').style.display = "flex";
});
