const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engineObj, world;
var ground;
var player;
var invisibleGround;
var playerWalkImg;
var jumpState = 0;
var bgSprite;
var gameState=0;
var carGroup 

function preload(){
  playerStandImg=loadAnimation("boy_standing_01.png");
  playerWalkImg=loadAnimation("boy_walking_01.png","boy_walking_02.png","boy_walking_03.png","boy_walking_04.png","boy_walking_05.png","boy_walking_06.png");
  playerJumpAnimation = loadAnimation("boy_jumping_01.png","boy_jumping_03.png","boy_jumping_04.png","boy_jumping_05.png","boy_jumping_06.png","boy_jumping_07.png","boy_jumping_08.png");
  playerSlideAnimation = loadAnimation("boy_sliding_01.png","boy_sliding_02.png","boy_sliding_03.png","boy_sliding_04.png","boy_sliding_05.png","boy_sliding_06.png","boy_sliding_07.png");
  backgroundImg = loadImage("bg.jpg");
  carImg = loadImage("obstacle1.png");

}
function setup() 
{
      createCanvas(displayWidth, displayHeight-120);
      engineObj = Engine.create();
      world = engineObj.world;
     // bgSprite= createSprite(displayWidth/2, displayHeight/2,displayWidth*50,displayHeight); 
     // bgSprite.addImage("background", backgroundImg);
      //bgSprite.velocityX=-4;

      carGroup = new Group();


      ground = new Ground(displayWidth/2-20,displayHeight-200, displayWidth*20,10)
      player  = createSprite(displayWidth/2-550, displayHeight-300, 100,100);
     
  
      player.addAnimation("standing",playerStandImg);
      player.addAnimation("walking",playerWalkImg);
      player.addAnimation("jumping",playerJumpAnimation);
      player.addAnimation("sliding",playerSlideAnimation);
      player.setCollider("circle", 0,0,40);
  
      invisibleGround = createSprite(displayWidth/2-20,displayHeight-200, displayWidth*20,10);
      invisibleGround.visible=true;

      player.debug = true;
     /* if(frameCount %60 ===0)
      {
          for (var k = 100; k <= 460; k = k + 50)
          {
               carObj.push(new Car(k, 175));
          }
      }*/
}

function draw() 
{
  background(backgroundImg);  

  Engine.update(engineObj);
 // image(backgroundImg,0, 0,displayWidth*8,displayHeight)

  //console.log(player.x);
 // if(bgSprite.x<0){
  // bgSprite.x=width/2;
  //}

  ground.display();


  //camera.debug=true;
 // camera.position.x =player.x +700;
 
  playerMovement();
  player.velocityY=player.velocityY+0.5
  player.collide(invisibleGround);

  //console.log(player.x+"------"+player.y);
spawnCar();
 if(gameState===2){
   console.log("gameEnded");
 }

 //console.log(player.x);
 //console.log(player.y);
 
  
  drawSprites();
}

function playerMovement()
{
  if(keyWentDown(RIGHT_ARROW))
  {
    player.velocityX = 20;
    //player.x=player.x+20;
    player.changeAnimation("walking",playerWalkImg);
  }

  if(keyWentUp(RIGHT_ARROW))
  {
    player.velocityX = 0;
    player.changeAnimation("standing",playerStandImg);
  }
  if(keyWentDown("space")){
    player.velocityY=-10;
    player.changeAnimation("jumping",playerJumpAnimation);
    jumpState = 1;
  }
  if(jumpState === 1&&player.isTouching(invisibleGround)){
    player.changeAnimation("standing",playerStandImg);
    jumpState =0;
  }
  if(keyWentDown(DOWN_ARROW)){
    player.changeAnimation("sliding",playerSlideAnimation);
  
  }
  if(keyWentUp(DOWN_ARROW)){
    player.changeAnimation("standing",playerStandImg);
  
  }
}

function spawnCar()
{
  if(frameCount %100 === 0)
  {
    var rand = random(50,displayWidth-100);
    var car = createSprite(rand, -50,50,50);
    //car.velocityX =-4;
    car.velocityY = 8; 
    car.addImage(carImg);
    car.bounceOff(invisibleGround);
    console.log(car.isTouching(invisibleGround));
    car.debug = true;
  }
}

