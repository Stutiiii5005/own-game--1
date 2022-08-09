var asteroids,earth,plane1
var gameoverImg, restartImg


function preload(){
  asteroids = loadImage("asteroids.jpeg")
  earth = loadImage("earth.jpeg")
  plane1 = loadImage("plane.jpeg")

  gameoverImg = loadImage("gameOver.png")
  restartImg = loadImage("restart.png")

  jumpSound = loadSound("jump.mp3")
  dieSound = loadSound("die.mp3")
  checkPointSound = loadSound("checkPoint.mp3")
}


function setup() {

  createCanvas(800,400);
  plane1 = createSprite(100,150,50,50);
  earth = createSprite(700,100,40,40);
  asteroids = createSprite(5,30,50,50)
  

 // restart = createSprite(300,140);
  // restart.addImage(restartImg);

}

function draw() {
  background("purple");  
  drawSprites()
}