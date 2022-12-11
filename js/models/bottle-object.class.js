class Bottle extends DrawableObject {
    height = 65;
    width = 55;

    IMAGES_BOTTLES_GROUND = [
        "./img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
        "./img/6_salsa_bottle/2_salsa_bottle_on_ground.png"
    ]

    imageGroundCache = 0;

    constructor() {
        super().loadImage(this.changeIndex());
        this.x = 100 + Math.floor(Math.random() * 2200);
        this.y = 350;
    }


    changeIndex() {
        console.log()
        this.imageGroundCache = 1;
        if (this.imageGroundCache == 1) {
            this.imageGroundCache = 0;
            return this.IMAGES_BOTTLES_GROUND[this.imageGroundCache];
        } else {
            this.imageGroundCache = 1;
            return this.IMAGES_BOTTLES_GROUND[this.imageGroundCache];
        }
    }
}