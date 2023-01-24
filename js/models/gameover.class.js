class GameOver extends DrawableObject {

    width = 768;
    height = 400;
    y = 0;
    x = 0;

    

gameOverImage = "./img/9_intro_outro_screens/game_over/game_over.png"


constructor(){
super().loadImage(this.gameOverImage);
}




}