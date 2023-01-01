let canvas;
let world;
let keyboard = new Keyboard();








function init(){
document.getElementById("canvas").classList.add("d-none");


//     console.log("My Character is", world.character)
//     console.log("My Enemies are", world.enemies);
// }
}


function startGame(){
    document.getElementById("start-overlay").classList.add("d-none");
    document.getElementById("canvas").classList.remove("d-none");

    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
}


window.addEventListener("keydown", (event) =>{
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

    window.addEventListener("keyup", (event) =>{
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

    // console.log(event);
})