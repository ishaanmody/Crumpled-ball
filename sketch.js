
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ball= new Paper(200, 600, 10, 10);
	//Create the Bodies Here.



  
}


function draw() {
	Engine.run(engine);
  rectMode(CENTER);
  background(0);
  ball.display();
}



