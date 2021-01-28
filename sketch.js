const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

var PAPER;
var dustbinImg;

function preload() {

	dustbinImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	PAPER = new Paper(500, 100, 30);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  groundObject.display();
  dustbinObj.display();
  PAPER.display();
  image(dustbinImg, 1080, 425, 240, 250);

  //if(keyDown("UP")) {
	//PAPER.velocityY = PAPER.velocityY - 5;
  //}

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(PAPER.body, PAPER.body.position, {x: 25, y: -50})
	}
}

