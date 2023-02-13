class Coin extends MovableObject {

    width = 120;
    height = 120;

    offset = {
        top: 20,
        bottom: 0,
        left: 20,
        right: 20
    }

    IMAGES_COIN = [
        "./img/8_coin/coin_1.png",
        "./img/8_coin/coin_2.png"
    ]

    currentImage = 0;


    constructor(x, y) {
        super().loadImage[this.IMAGES_COIN[0]];
        this.x = x;
        this.y = y
        this.loadImages(this.IMAGES_COIN);
        this.animate();




    }

    animate() {

        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 200);

    }



}