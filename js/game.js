let canvas;
let world;
let keyboard = new Keyboard();
const imageMusic = document.getElementById('music-img');
const imageSourcesMusic = ['./css/icons/music.png', './css/icons/music_red.png'];
let currentImageIndex = 0;
let lastTap = 0;
const delayThrow = 500; // delay in milliseconds for double tap
const delay = 300;




function init() {
    document.getElementById("canvas").classList.add("d-none");

}


function startGame() {
    initLevel();
    document.getElementById("start-overlay").classList.add("d-none");
    document.getElementById("canvas").classList.remove("d-none");

}


function showControls() {
    document.getElementById("control-btn").classList.toggle("d-none");
}


function muteBgMusic() {
    currentImageIndex = (currentImageIndex + 1) % imageSourcesMusic.length;
    document.getElementById("music-img").src = imageSourcesMusic[currentImageIndex];
    muteSound();
}


window.addEventListener("keydown", (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (event.keyCode == 38) {
        keyboard.UP = true;
    }

    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (event.keyCode == 68) {
        keyboard.D = true;


    }
})

window.addEventListener("keyup", (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (event.keyCode == 38) {
        keyboard.UP = false;
    }

    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (event.keyCode == 68) {
        keyboard.D = false;
    }

});



// add event listeners for touchstart and touchend events
window.addEventListener('touchstart', function (e) {
    // check if the touch is on the left side of the screen
    if (e.touches[0].clientX < window.innerWidth / 2 && e.touches[0].clientY > (window.innerHeight / 2)) {
        keyboard.LEFT = true;
        const now = new Date().getTime();
        if (now - lastTap < delay) {
            keyboard.UP = true; // set UP to true to make the character jump
        }
        lastTap = now;
    }
    // check if the touch is on the right side of the screen
    else if (e.touches[0].clientX > window.innerWidth / 2 && e.touches[0].clientY > (window.innerHeight / 2)) {
        keyboard.RIGHT = true;
        const now = new Date().getTime();
        if (now - lastTap < delay) {
            keyboard.UP = true; // set UP to true to make the character jump
        }
        lastTap = now;
    }
    else if (e.touches[0].clientX > window.innerWidth / 2 && e.touches[0].clientY < (window.innerHeight / 2)) {
        const now = new Date().getTime();
        if (now - lastTap < delay) {
            keyboard.D = true; // set UP to true to make the character jump
        }
        lastTap = now;
    }
});


window.addEventListener('touchend', function (e) {
    // reset all touch controls when the touch ends
    keyboard.LEFT = false;
    keyboard.RIGHT = false;
    keyboard.UP = false;
    keyboard.D = false;
});
