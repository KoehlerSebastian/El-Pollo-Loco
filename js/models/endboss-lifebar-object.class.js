class EndbossLifebar extends DrawableObject  {


    IMAGES_ENDBOSS_LIFEBAR = [
        "./img/7_statusbars/2_statusbar_endboss/green.png"
    ]

    bottlesInBag = 0;

    constructor() {
        super().loadImage(this.IMAGES_ENDBOSS_LIFEBAR[0])
        this.loadImages(this.IMAGES_ENDBOSS_LIFEBAR);
        this.x = 500;
        this.y = 100;
        this.width = 200;
        this.height = 60;
    }


//     resolveImageIndexBottles() {
//         if (this.bottlesInBag == 150) {
//             return 0;
//         }
//         else if (this.energy == 120) {
//             return 1;
//         }
//         else if (this.bottlesInBag == 90) {
//             return 2;
//         }
//         else if (this.bottlesInBag == 60) {
//             return 3;
//         }
//         else if (this.bottlesInBag == 30) {
//             return 4;
//         }
//         else if (this.bottlesInBag == 0) {
//             return 5;
//         }
//     }
// }

}