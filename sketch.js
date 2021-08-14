
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(375,200,250,20);
	World.add(world,roof);

	bob1 = new Bob(280,400,2);
	bob2 = new Bob(330,400,2);
	bob3 = new Bob(380,400,2);
	bob4 = new Bob(430,400,2);
	bob5 = new Bob(480,400,2);

	rope1 = new Rope(bob1.body,roof.body,-100,0);
	World.add(world,rope1);

	rope2 = new Rope(bob2.body,roof.body,-50,0);
	World.add(world,rope2);

	rope3 = new Rope(bob3.body,roof.body,0,0);
	World.add(world,rope3);

	rope4 = new Rope(bob4.body,roof.body,+50,0);
	World.add(world,rope4);

	rope5 = new Rope(bob5.body,roof.body,+100,0);
	World.add(world,rope5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:250,y:-1000});
	}
}


