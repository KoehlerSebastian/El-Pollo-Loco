class CoinBar extends StatusBar{


    IMAGES_COIN_BAR = [
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
    "./img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png"

    ]

    constructor(){
        super();
        this.loadImages(this.IMAGES_COIN_BAR);
        this.x = 450;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100, this.IMAGES_COIN_BAR);
    }
}