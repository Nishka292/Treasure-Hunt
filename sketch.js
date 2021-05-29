var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var gameover , gameoverImage;
    
//Game States
var PLAY=1;
var END=0;
var gameState = PLAY;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  gameoverImage =loadImage("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;

//creating game over 
gameover = createSprite(200,300);
gameover.addImage("gameover",gameoverImage);
gameover.scale = 0.5
  
//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  console.log("this is ",gameState)
  
  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
    
    gameover.visible = false;
    
        if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+10;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+10;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
    treasureCollection=treasureCollection+10;
      
    }else if(swordGroup.isTouching(boy)) {
      treasureCollection=treasureCollection-100;
      gameState = END;
      boy.addAnimation("SahilRunning",gameoverImage);
    boy.x = 200;
    boy.y = 300;
    }
   edges= createEdgeSprites();{
  boy.collide(edges);}
  }
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

  if(gameState===END){
    background.velocityY = 0;
    gameover.visible = true;
    
     swordGroup.setVelocityYEach(0);
     cashG.setVelocityYEach(0);
     diamondsG.setVelocityYEach(0);
     jwelleryG.setVelocityYEach(0);
     cashG.setLifetimeEach(-1);
     diamondsG.setLifetimeEach(-1);
     jwelleryG.setLifetimeEach(-1);
     swordGroup.setLifetimeEach(-1);
    }
  
  
  drawSprites();{
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,30,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 170;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 170;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 170;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 170;
  swordGroup.add(sword);
  }
}