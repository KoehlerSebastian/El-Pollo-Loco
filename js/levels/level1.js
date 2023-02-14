let level1;
let runWorld = false;
let soundActive = true;


function initLevel(){
level1 = new Level(enemies, smallChicken, clouds, backgroundObjects, bottles, endboss, coins);
initWorld();
}



function initWorld(){
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
    runWorld = true;
}

function muteSound(){
    if(soundActive){
        soundActive = false;
    }else{
        soundActive = true;
    }
}


    
const enemies = [ 
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken()
    ]


const smallChicken = [
    new SmallChicken(),
    new SmallChicken(),
    new SmallChicken(),
    new SmallChicken()
]

    

const clouds = [
    new Cloud()
]


const backgroundObjects = [
    new BackgroundObject("./img/5_background/layers/air.png", -719),
    new BackgroundObject("./img/5_background/layers/3_third_layer/2.png", -719),
    new BackgroundObject("./img/5_background/layers/2_second_layer/2.png", -719),
    new BackgroundObject("./img/5_background/layers/1_first_layer/2.png", -719),

    new BackgroundObject("./img/5_background/layers/air.png", 0),
    new BackgroundObject("./img/5_background/layers/3_third_layer/1.png", 0),
    new BackgroundObject("./img/5_background/layers/2_second_layer/1.png", 0),
    new BackgroundObject("./img/5_background/layers/1_first_layer/1.png", 0),

    new BackgroundObject("./img/5_background/layers/air.png", 719),
    new BackgroundObject("./img/5_background/layers/3_third_layer/2.png", 719),
    new BackgroundObject("./img/5_background/layers/2_second_layer/2.png", 719),
    new BackgroundObject("./img/5_background/layers/1_first_layer/2.png", 719),


    new BackgroundObject("./img/5_background/layers/air.png", 719 * 2),
    new BackgroundObject("./img/5_background/layers/3_third_layer/1.png", 719 * 2),
    new BackgroundObject("./img/5_background/layers/2_second_layer/1.png", 719 * 2),
    new BackgroundObject("./img/5_background/layers/1_first_layer/1.png", 719 * 2),

    new BackgroundObject("./img/5_background/layers/air.png", 719 * 3),
    new BackgroundObject("./img/5_background/layers/3_third_layer/2.png", 719 * 3),
    new BackgroundObject("./img/5_background/layers/2_second_layer/2.png", 719 * 3),
    new BackgroundObject("./img/5_background/layers/1_first_layer/2.png", 719 * 3)
]

 const bottles = [

    new Bottle(0),
    new Bottle(1),
    new Bottle(0),
    new Bottle(1),
    new Bottle(0),
    new Bottle(1),
    new Bottle(0),
    new Bottle(1),
    new Bottle(0),
    new Bottle(1),
    new Bottle(0),
    new Bottle(1),
    new Bottle(0),
    new Bottle(1),
    new Bottle(0),
    new Bottle(1),
    new Bottle(0),
    new Bottle(1),
    new Bottle(0),
    new Bottle(1)


]

const endboss = [
    new Endboss()
]

const coins = [
    new Coin(300, 200),
    new Coin(700, 300),
    new Coin(900, 200),
    new Coin(1500, 250),
    new Coin(1700, 300),
]

