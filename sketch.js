var fixedRect, movingRect,rect3,rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "orange";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect3 = createSprite(400, 200, 50, 80);
  rect3.shapeColor = "blue";
  rect3.debug = true;

  rect4 = createSprite(400, 200, 50, 80);
  rect4.shapeColor = "orange";
  rect4.debug = true;

  movingRect.velocityY = -5;
  rect3.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  rect4.x=mouseX;
  rect4.y=mouseY;
if (isTouching(fixedRect,rect4)) {
  fixedRect.shapeColor = "purple";
  rect4.shapeColor = "purple";
} else {
  fixedRect.shapeColor = "orange";
  rect4.shapeColor = "orange";
}
 bounceOff(movingRect,rect3);

  drawSprites();
}











