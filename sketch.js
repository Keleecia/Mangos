const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var boyIMG;
var treeIMG;
var arm;
var ground;
var rock;
var mango; 
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var mango7;
var collide;

function preload()
{
	boyIMG = loadImage('Images/boy.png');
	treeIMG = loadImage('Images/tree.png');
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;


	ground = new Ground(400,640,800,20);
	rock = new Rock(65,460,50);
    arm = new Hand(rock.body,{x:87, y:480});
	mango = new Mango(400,300,45); 
	mango2 = new Mango(500,300,45); 
	mango3 = new Mango(600,200,45); 
	mango4 = new Mango(650,300,45); 
	mango5 = new Mango(550,300,45); 
	mango6 = new Mango(450,200,45); 
	mango7 = new Mango(500,200,45); 


	
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  image(boyIMG,50,400,200,300); 
  image(treeIMG,350,150,400,500);
   
  
  ground.display();
  rock.display();
  arm.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();


  detectcollision(rock,mango);
  detectcollision(rock,mango2);
  detectcollision(rock,mango3);
  detectcollision(rock,mango4);
  detectcollision(rock,mango5);
  detectcollision(rock,mango6);
  detectcollision(rock,mango7);
  drawSprites();
 
}

function mouseDragged()
{
  Matter.Body.setPosition(rock.body, {x: mouseX, y: mouseY});
}
function mouseReleased()
{
arm.fly();
}

function detectcollision(lstone,lmango)
{

mangoBP = lmango.body.position;
stoneBP = lstone.body.position;

var distance = dist(stoneBP.x,stoneBP.y,mangoBP.x,mangoBP.y)

if(distance<= lmango.r + lstone.r)
{
 Matter.Body.setStatic(lmango.body,false)
}

}
function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.setPosition(rock.body, {x:67, y:430 })
		arm = new Hand(rock.body, {x:87, y:480});
	
	}
}
