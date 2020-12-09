
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject,roofObject;
var rope;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   roof= createSprite(50,50,100,40);
   bobObject1= new Bob(50,150,20);
   bobObject2= new Bob(100,150,20);
   bobObject3= new Bob(150,150,20);
   bobObject4= new Bob(200,150,20);
   bobObject5= new Bob(250,150,20);
  
   rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
   rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*2,0)
   rope3=new rope(bobObject3.body,roofObject.body,-bobDiameter*2,0)
   rope4=new rope(bobObject4.body,roofObject.body,-bobDiameter*2,0)
   rope5=new rope(bobObject5.body,roofObject.body,-bobDiameter*2,0)
   //Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();	
  roof.display();
  
  drawSprites();
 
}



