var fixed, moving, a, b;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(200,300,30,30);
  fixed.shapeColor = "green";
  moving.shapeColor = "yellow";

  a = createSprite(100,250,60,60);
  a.shapeColor = "purple";
  a.velocityX = 2;
  b = createSprite(700,250,40,40);
  b.shapeColor = "red";
  b.velocityX = -3;
}

function draw() {
  background(0);  
  drawSprites();

  moving.x = mouseX;
  moving.y = mouseY;
  if(isTouching(fixed,moving)){
  fixed.width = fixed.width+10;
  }
  else{
    fixed.width = 50;
  }
  bounceOff(a,b);
}

function isTouching(object1,object2){

  if(object1.x - object2.x <= object1.width/2 + object2.width/2 &&
    object2.x - object1.x <= object1.width/2 + object2.width/2 &&
    object1.y - object2.y <= object1.height/2 + object2.height/2 &&
    object2.y - object1.y <= object1.height/2 + object2.height/2){
    return true
  }
  else{
    return false
  }

}

function bounceOff(object1,object2){

 if(object1.x - object2.x <= object1.width/2 + object2.width/2 &&
  object2.x - object1.x <= object1.width/2 + object2.width/2){
    object1.velocityX = object1.velocityX*-1;
    object2.velocityX = object2.velocityX*-1;
  }
  if(object1.y - object2.y <= object1.height/2 + object2.height/2 &&
    object2.y - object1.y <= object1.height/2 + object2.height/2){
      object1.velocityY = object1.velocityY*-1;
      object2.velocityY = object2.velocityY*-1;
    }

}