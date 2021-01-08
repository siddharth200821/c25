const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperObject,groundObject	
var world;

var groundObject;

var right,left,bottom;

var ball;

var dbin;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ball= new Paper();

	groundObject=new ground(width/2,670,width,20);

	dbin = new dustbin(1173,545,355,225);
	
	right = new ground(1000,560,20,200);
	left = new ground(1350,560,20,200);



  
}


function draw() {
  rectMode(CENTER);
  background(220);
  Engine.update(engine);
 
  
  groundObject.display();
  dbin.display();	

  ball.display();
  right.display();
  left.display();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
//applyForce(	object_name,	object_position,	direction_of_the_push	)
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
    
  	}
}