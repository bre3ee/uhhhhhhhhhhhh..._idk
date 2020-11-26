var fixedrectanglething;
var movingrectanglething;

function setup() {
  createCanvas(800,400);

  fixedrectanglething = createSprite(400,200,10,80);
  movingrectanglething = createSprite(600, 200, 80,10);
  movingrectanglething.shapeColor = "green";
  fixedrectanglething.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  
  movingrectanglething.x = World.mouseX;
  movingrectanglething.y = World.mouseY;
  console.log(fixedrectanglething.width/2 + movingrectanglething.width/2);
  console.log(movingrectanglething.x - fixedrectanglething.x);
if(movingrectanglething.x -fixedrectanglething.x == fixedrectanglething.width/2 + movingrectanglething.width/2){
   movingrectanglething.shapeColor = "red";
   fixedrectanglething.shapeColor = "red";
}else{
  movingrectanglething.shapeColor = "green";
  fixedrectanglething.shapeColor = "green";
}
  drawSprites();

}
