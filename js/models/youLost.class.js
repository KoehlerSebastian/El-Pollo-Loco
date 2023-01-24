class GameLost extends DrawableObject {

    width = 768;
    height = 400;
    y = 0;
    x = 0;

    

gameLostImage = "./img/9_intro_outro_screens/game_over/you_lost.png"


constructor(){
super().loadImage(this.gameLostImage);
}




}