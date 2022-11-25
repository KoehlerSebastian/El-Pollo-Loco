class Cloud extends MovableObject{
y = 20;
height = 200;
width = 300



    constructor(){
        super().loadImage("./img/5_background/layers/4_clouds/1.png");
        this.x = 0 + Math.floor(Math.random() * 500);
    }


}