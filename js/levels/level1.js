let runWorld = false;
const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),

    ],

    [
        new SmallChicken(),
        new SmallChicken(),
        new SmallChicken(),
        new SmallChicken()

    ],


    [
        new Cloud()
    ],

    [
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


        new BackgroundObject("./img/5_background/layers/air.png", 719*2),
        new BackgroundObject("./img/5_background/layers/3_third_layer/1.png", 719*2),
        new BackgroundObject("./img/5_background/layers/2_second_layer/1.png", 719*2),
        new BackgroundObject("./img/5_background/layers/1_first_layer/1.png", 719*2),

        new BackgroundObject("./img/5_background/layers/air.png", 719*3),
        new BackgroundObject("./img/5_background/layers/3_third_layer/2.png", 719*3),
        new BackgroundObject("./img/5_background/layers/2_second_layer/2.png", 719*3),
        new BackgroundObject("./img/5_background/layers/1_first_layer/2.png", 719*3)

    ],

    [
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
    ],
    [
        new Endboss()
    ],
    [
        new Coin(200, 300),
        new Coin(600, 200),
        new Coin(900, 300),
        new Coin(1200, 200),
        new Coin(1500, 300),
        new Coin(1300, 200),
        new Coin(1400, 300),
        new Coin(1600, 200),
        new Coin(1700, 300),
        new Coin(1900, 200)
    ]
)

// let level1;

// function initLevel() {
//     level1 = new Level(
//         createNormalChickens(),
//         createSmallChickens(),
//         createClouds(),
//         createLevelBackgrounds(),
//         createBottles(),
//         createEndboss(),
//         createCoins()
//     )
// }



// function createNormalChickens() {
//     return [
//         new Chicken(),
//         new Chicken(),
//         new Chicken(),
//         new Chicken(),
//         new Chicken(),
//         new Chicken()
//     ]
// }


// function createSmallChickens() {
//     return [
//         new SmallChicken(),
//         new SmallChicken(),
//         new SmallChicken(),
//         new SmallChicken()
//     ]
// }

// function createClouds() {
//     return [
//         new Cloud()
//     ]
// }


// function createLevelBackgrounds() {
//     return [
//         new BackgroundObject("./img/5_background/layers/air.png", -719),
//         new BackgroundObject("./img/5_background/layers/3_third_layer/2.png", -719),
//         new BackgroundObject("./img/5_background/layers/2_second_layer/2.png", -719),
//         new BackgroundObject("./img/5_background/layers/1_first_layer/2.png", -719),

//         new BackgroundObject("./img/5_background/layers/air.png", 0),
//         new BackgroundObject("./img/5_background/layers/3_third_layer/1.png", 0),
//         new BackgroundObject("./img/5_background/layers/2_second_layer/1.png", 0),
//         new BackgroundObject("./img/5_background/layers/1_first_layer/1.png", 0),

//         new BackgroundObject("./img/5_background/layers/air.png", 719),
//         new BackgroundObject("./img/5_background/layers/3_third_layer/2.png", 719),
//         new BackgroundObject("./img/5_background/layers/2_second_layer/2.png", 719),
//         new BackgroundObject("./img/5_background/layers/1_first_layer/2.png", 719),


//         new BackgroundObject("./img/5_background/layers/air.png", 719 * 2),
//         new BackgroundObject("./img/5_background/layers/3_third_layer/1.png", 719 * 2),
//         new BackgroundObject("./img/5_background/layers/2_second_layer/1.png", 719 * 2),
//         new BackgroundObject("./img/5_background/layers/1_first_layer/1.png", 719 * 2),

//         new BackgroundObject("./img/5_background/layers/air.png", 719 * 3),
//         new BackgroundObject("./img/5_background/layers/3_third_layer/2.png", 719 * 3),
//         new BackgroundObject("./img/5_background/layers/2_second_layer/2.png", 719 * 3),
//         new BackgroundObject("./img/5_background/layers/1_first_layer/2.png", 719 * 3)
//     ]
// }


// function createBottles() {
//     return [
//         new Bottle(0),
//         new Bottle(1),
//         new Bottle(0),
//         new Bottle(1),
//         new Bottle(0),
//         new Bottle(1),
//         new Bottle(0),
//         new Bottle(1),
//         new Bottle(0),
//         new Bottle(1),
//         new Bottle(0),
//         new Bottle(1),
//         new Bottle(0),
//         new Bottle(1),
//         new Bottle(0),
//         new Bottle(1),
//         new Bottle(0),
//         new Bottle(1),
//         new Bottle(0),
//         new Bottle(1)
//     ]
// }

// function createEndboss() {
//     return [
//         new Endboss()
//     ]
// }

// function createCoins() {
//     return [
//         new Coin(200, 200),
//         new Coin(250, 220),
//         new Coin(300, 220),
//         new Coin(200, 250),
//         new Coin(200, 300),
//         new Coin(250, 320),
//         new Coin(300, 300),
//         new Coin(200, 350),
//         new Coin(200, 400),
//         new Coin(250, 400),
//         new Coin(300, 400)
//     ]
// }

