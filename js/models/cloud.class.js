class Cloud extends MovableObject{
y = 0;
height = 200;
width = 300



    constructor(){
        super().loadImage("./img/5_background/layers/4_clouds/1.png");
        this.x = 0 + Math.floor(Math.random() * 500);

        this.animate();

    }


    animate() {
        this.moveLeft();
    }

}