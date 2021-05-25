 var rect1
 var rect2

 function setup() {
  createCanvas(800,400);
  rect1 = createSprite(100, 200, 50, 50);
  rect1.velocityX = 4;
  rect2 = createSprite(600,200,70,40);
  rect2.velocityX = -4;
  rect1.debug = true;
  rect2.debug = true;
}

function draw() {
  background(255,255,255); 
  if(isTouching(rect1,rect2)){
      rect1.shapeColor = "red"
      rect2.shapeColr = "blue"
  }else {
    rect1.shapeColor = "green"
    rect2.shapeColor = "green"
  }
 // bounceOff(rect1,rect2);
  drawSprites();
}

