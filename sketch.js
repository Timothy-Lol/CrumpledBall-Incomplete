
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var ground;	
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,670,width,20);
	paper = new Paper(300,80,20,20);
	dustbinObj=new dustbin(1200,650);
	ground = new Ground(800,height,1600,50)

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  groundObject.display();
  dustbinObj.display();
  ground.display();
  paper.display();
  

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
       
     }
}
