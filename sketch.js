var speed,width;
var car,wall;
function setup() {
  createCanvas(1600,400);
  car=createSprite(100,200, 50, 50);
  wall = createSprite(1200,200,60,height/1.3);
  wall.shapeColor = "blue";
  speed = random(15,30);
  weight = random(400,1200);
  //deformation= random(20,100);                
  car .velocityX = speed;
  
}
function draw() {
  background(0);
  if (wall.x-car.x<(car.width+wall.width)/1.7) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed* speed/22509;
    
    if(deformation<100){
      car.shapeColor =color(0,255,0);
      wall.shapeColor =  color(255,0,0);
    }
      if(deformation<180 && deformation>100){
        car.shapeColor = color(230,230,0);
        wall.shapeColor =color(0,255,0);
      }
    if(deformation>180){
      car.shapeColor = color(255,0,0);
      wall.shapeColor =color(230,230,0);
        
    }
}  
 drawSprites();
}