
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof   = new Roof(600,150);

	bob1  = new Bob(600);
	bob2 = new Bob(650);
	bob3  = new Bob(700);
	bob4  = new Bob(550);
	bob5  = new Bob(500);

	rope1  = new Rope(bob1.body,roof.body,0,0);
	rope2  = new Rope(bob2.body,roof.body,50,0);
	rope3  = new Rope(bob3.body,roof.body,100,0);
	rope4  = new Rope(bob4.body,roof.body,-50,0);
	rope5  = new Rope(bob5.body,roof.body,-100,0);

	
	Engine.run(engine);
  
}


function draw() {
 
  background("#ffe300");

  roof.display();

  fill("purple")
  bob1.display();

  fill("purple")
  bob2.display();
  
  fill("red")
	bob3.display();

	fill("purple")
	bob4.display();

	fill("red")
	bob5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(bob5.body, bob5.body.position, {x:-50,y:-50})

}

if (keyCode === DOWN_ARROW){
	Matter.Body.applyForce(bob3.body, bob3.body.position, {x:50,y:50})
}

}



