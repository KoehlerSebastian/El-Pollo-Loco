class Chicken extends MovableObject{
    width = 50;
    height = 35;
    x;
y = 380;


    constructor(){
        super().loadImage("./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
        this.x = 500 + Math.floor(Math.random() * 200);
    }

}