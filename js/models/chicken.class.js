class Chicken extends MovableObject{
    width = 50;
    height = 35;
    y = 400;
    x = 500 + Math.floor(Math.random() * 200)





    constructor(){
        super().loadImage("./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    }

}