var bulet,wall,speed,weight,thickness

function setup() {

  createCanvas(1600,400);
  bulet=createSprite(50, 200, 50, 50);
  
  speed=(random(223,321))
  weight=random(30,52)
  thickness=random(22,83)
  bulet.velocityX=speed
  bulet.shapeColor="white"
  wall=createSprite(1500, 200, thickness, height/2);

}

function draw() {
  background(0);  
  if(hasColided(bulet,wall))
  {
    bulet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      bulet.shapeColor="red"

    }

    if(damage<10){
      bulet.shapeColor="green"

    }
    
  }
  drawSprites();
}

function hasColided(tempBulet,tempWall){
buletRightEdge=tempBulet.x+tempBulet.width
wallLeftEdge=tempWall.x
if(buletRightEdge>wallLeftEdge){
  return true
}
return false
}