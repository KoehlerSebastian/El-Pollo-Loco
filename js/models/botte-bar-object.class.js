class BottleBar extends DrawableObject  {


    IMAGES_BOTTLE_BAR = [
        "./img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png",
        "./img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png",
        "./img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png",
        "./img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png",
        "./img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png",
        "./img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png",
    ]


    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLE_BAR);
        this.x = 250;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.bottlesLootet(0)
    }



    bottlesLootet(bottlesInBag) {
        this.bottlesInBag = bottlesInBag
        let path = this.IMAGES_BOTTLE_BAR[this.resolveImageIndexBottles()];
        this.img = this.imageCache[path];
    }

    resolveImageIndexBottles() {
        if (this.bottlesInBag == 0) {
            return 0;
        }
        else if (this.bottlesInBag == 1) {
            return 1;
        }
        else if (this.bottlesInBag == 2) {
            return 2;
        }
        else if (this.bottlesInBag == 3) {
            return 3;
        }
        else if (this.bottlesInBag == 4) {
            return 4;
        }
        else if (this.bottlesInBag == 5) {
            return 5;
        }
    }
}

