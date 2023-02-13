class CoinBar extends DrawableObject{


    IMAGES_COIN_BAR = [
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png"

    ]

    coins;


    constructor(){
        super();
        this.loadImages(this.IMAGES_COIN_BAR);
        this.x = 450;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.coinsLootet(0);
    }



    coinsLootet(coins) {
        this.coins = coins;
        let path = this.IMAGES_COIN_BAR[this.resolveImageIndexCoins()];
        this.img = this.imageCache[path];
    }

    resolveImageIndexCoins() {
        if (this.coins == 0) {
            return 0;
        }
        else if (this.coins == 1) {
            return 1;
        }
        else if (this.coins == 2) {
            return 2;
        }
        else if (this.coins == 3) {
            return 3;
        }
        else if (this.coins== 4) {
            return 4;
        }
        else if (this.coins == 5) {
            return 5;
        }
    }



}