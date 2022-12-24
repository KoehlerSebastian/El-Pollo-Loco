class Level {
    enemies;
    clouds;
    backgroundObjects;
    bottles;
    endboss;
    smallChicken;
    coins;
    level_end_x = 2200;

    constructor(enemies, smallChicken, clouds, backgroundObjects, bottles, endboss, coins){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.endboss = endboss;
        this.smallChicken = smallChicken;
        this.coins = coins;
    }

}