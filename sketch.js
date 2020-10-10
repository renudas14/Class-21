function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(400,200,10,90);
  fixedRect2=createSprite(400,400, 50, 50);
  fixedRect2.velocityY=-2;

}

function draw() {
  background("Green");  
  text(movingRect.x - fixedRect.x,50,50);
  text(movingRect.width/2+fixedRect.width/2,300,50);
  //movingRect.y=mouseY;
  //movingRect.x=mouseX;
  if( isTouching(fixedRect2,movingRect)){
    movingRect.shapeColor="Pink";
    fixedRect2.shapeColor="Pink";
  }
  else{
    movingRect.shapeColor="blue";
    fixedRect2.shapeColor="blue";
  }
  Bounceoff(movingRect,fixedRect2);
  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x - object2.x<object1.width/2+object2.width/2
    && object2.x - object1.x<object1.width/2+object2.width/2
    && object1.y - object2.y<object1.height/2+object2.height/2
    && object2.y - object1.y<object1.height/2+object2.height/2){
  return true
  }
  else{
  return false
  }

}

function Bounceoff(object1,object2){
  if(object1.x - object2.x<object1.width/2+object2.width/2
    && object2.x - object1.x<object1.width/2+object2.width/2){
    object1.velocityX=object1.velocityX * -1;
    object2.velocityX=object2.velocityX * -1;
   }
   if(object1.y - object2.y<object1.height/2+object2.height/2
   && object2.y - object1.y<object1.height/2+object2.height/2){
    object1.velocityY=object1.velocityY * -1;
    object2.velocityY=object2.velocityY * -1;
   }

}