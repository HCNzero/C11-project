
function preload(){
seaImg = loadImage("sea.png");
shipAnimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

  seaSprite = createSprite(200,200);
  seaSprite.addImage(seaImg);
  seaSprite.velocityX = -3;
  seaSprite.scale = 0.5;

  shipSprite = createSprite(200,200);
  shipSprite.addAnimation("shipSprite",shipAnimation);
  shipSprite.scale = 0.3;

 
}

function draw() {
  background("blue");

  if(seaSprite.x < 0){
    seaSprite.x = 400;
  }

    drawSprites();

 
}
