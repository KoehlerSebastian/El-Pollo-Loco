class Level {
    enemies;
    clouds;
    backgroundObjects;
    bottles;
    endboss;
    smallChicken;
    level_end_x = 2200;

    constructor(enemies, smallChicken, clouds, backgroundObjects, bottles, endboss){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.endboss = endboss;
        this.smallChicken = smallChicken;
    }

}