//Hamburger

function toggleMenu() {
    document.querySelector('.side-bar').classList.toggle('side-bar-hidden')
}

document.querySelector('.hamburger').addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu()
});
// LOGIN MODUAL
//open
document.getElementById('btnLogin').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = "flex";
});

document.getElementById('btnSide').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = "flex";
});
//closed cross
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = "none";
});
//closed escape
document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
        document.querySelector('.bg-modal').style.display = "none";
    }
});
//closed window click
document.querySelector('.bg-modal').addEventListener('click', function (e) {
    if (e.target === this) {
        document.querySelector('.bg-modal').style.display = "none";
    }
});

// CHAT MODUAL
//open
document.getElementById('chatPop').addEventListener('click', function () {
    document.querySelector('.chat-modual').style.display = "flex";
});
//closed cross
document.querySelector('.close-msg').addEventListener('click', function () {
    document.querySelector('.chat-modual').style.display = "none";
});
// closed escape
document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
        document.querySelector('.chat-modual').style.display = "none";
    }
});
// closed window click
document.querySelector('.chat-modual').addEventListener('click', function (e) {
    if (e.target === this) {
        document.querySelector('.chat-modual').style.display = "none";
    }
});
// QUIT MODUAL
//open
document.getElementById('quitBtn').addEventListener('click', function () {
    document.querySelector('.quit-modual').style.display = "flex";
});
document.getElementById('side-quit').addEventListener('click', function () {
    document.querySelector('.quit-modual').style.display = "flex";
});
//closed cross
document.querySelector('.cross-btn').addEventListener('click', function () {
    document.querySelector('.quit-modual').style.display = "none";
});
//closed cancel button
document.querySelector('.cancel-btn').addEventListener('click', function () {
    document.querySelector('.quit-modual').style.display = "none";
});
//closed escape
document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
        document.querySelector('.quit-modual').style.display = "none";
    }
});
//closed window click
document.querySelector('.quit-modual').addEventListener('click', function (e) {
    if (e.target === this) {
        document.querySelector('.quit-modual').style.display = "none";
    }
});

//CHART

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {

    type: 'bar',
    data: {

        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        datasets: [{
                label: "Signups",
                backgroundColor: '#8DBEC8',
                borderColor: '#8DBEC8',
                data: [350, 83, 220, 370, 410, 390, 250, 240, 260, 290],
            },
            {
                label: "FTD",
                backgroundColor: '#F29E4E',
                borderColor: '#F29E4E',
                data: [400, 99, 260, 240, 420, 180, 200, 570, 270, 280],
            },
            {
                label: "Earned",
                backgroundColor: '#71B374',
                borderColor: '#71B374',
                data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 2],
                hidden: true,
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

Chart.defaults.global.defaultFontColor = '#a6a6a6';
Chart.defaults.global.defaultFontSize = 16;