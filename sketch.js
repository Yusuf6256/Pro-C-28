const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6
var world,boy;
var stone;
var slingshot

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
  mango2=new mango(1000,90,30);
  mango3=new mango(900,160,30);
  mango4=new mango(1200,180,30);
  mango5=new mango(860,200,30);
  mango6=new mango(1150,120,30);

	stone = new Stone(230,430,30);

	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);

	slingshot = new SlingShot(stone.stone,{x:240,y:420})

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  
  text("Press 'Space' to play Again",190,200)

  image(boy ,200,340,200,300);
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  detectcollison(stone,mango1)
  detectcollison(stone,mango2)
  detectcollison(stone,mango3)
  detectcollison(stone,mango4)
  detectcollison(stone,mango5)
  detectcollison(stone,mango6)

  stone.display();

  slingshot.display();

  groundObject.display();
}
function mouseDragged()
{
  Matter.Body.setPosition(stone.stone,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed()
{
  if (keyCode === 32)
  {
    Matter.Body.setPosition(stone.stone,{x:240,y:420})
    slingshot.attach(stone.stone)
  }
}
//console.log(keyPressed)

function detectcollison(lstone,lmango)
{
  mangoposition = lmango.body.position
  stoneposition = lstone.stone.position

  var distance = dist(stoneposition.x,stoneposition.y,mangoposition.x,mangoposition.y)
  if(distance<=lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body,false)
  }
}