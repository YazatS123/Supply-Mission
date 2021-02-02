var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var fall = 0;
var rect1, rect2, rect3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	var package_options = {
		restitution: 1.0
	}
	var ground_options ={
		isStatic: true
	}
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	engine = Engine.create();
	world = engine.world;
	packageBody = Bodies.circle(width/2 , 200 , 5, package_options);
	rect1 = new Box(300, 640, 10, 60);
	rect2 = new Box(360, 640, 10, 60);
	rect3 = new Box(300, 680, 60, 10);
	World.add(world, packageBody);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options );
 	World.add(world, ground);
	Engine.run(engine);  
}
function draw() {
  rectMode(CENTER);
  background(0);
  rect1.display();
  rect2.display();
  rect3.display();
  if(fall === 1){
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
  }
  
  drawSprites();
}
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    fall = 1;
  }
}



