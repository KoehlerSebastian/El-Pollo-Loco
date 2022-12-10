class Bottle extends DrawableObject{
height = 65;
width = 55;

constructor(){
    super().loadImage("./img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
    this.x = 100 + Math.floor(Math.random() * 2200);
    this.y = 350;
}
}