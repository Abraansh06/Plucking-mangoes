const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var treeObj, stoneObj,groundObject, sling;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12;
var world,boy;
var park;

function preload(){
	boy = loadImage("sprites/boy.png");
  park=loadImage("sprites/park.png")
  }

function setup() {
createCanvas(1600, 650);
engine = Engine.create();
world = engine.world;

stoneObj = new Stone(235,420,30); 

m1 = new Mango(1170,130,30);
m2 = new Mango(1100,100,30);
m3 = new Mango(1140,150,40);
m4 = new Mango(1000,70,30);
m5 = new Mango(1100,70,30);
m6 = new Mango(1000,230,30);
m7 = new Mango(900,230,40);
m8 = new Mango(900,160,40);
m9 = new Mango(1010,140,30);
m10 = new Mango(1200,200,40);
m11 = new Mango(1120,50,40);

treeObj = new Tree(1050,580);

groundObject = new Ground(width/2,600,width,20);

sling = new Slingshot(stoneObj.body,{x:240,y:460})  
Engine.run(engine);
}

function draw() {
  background(park);
  textSize(30);
  fill('black');
  text("Press Space to get more chance to Play!!",50 ,50);
  image(boy ,200,380,200,300);
  
  treeObj.display();
  stoneObj.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  m11.display();
  
  stoneObj.display();

  groundObject.display();
  sling.display();

  detectollision(stoneObj,m1);
  detectollision(stoneObj,m2);
  detectollision(stoneObj,m3);
  detectollision(stoneObj,m4);
  detectollision(stoneObj,m5);
  detectollision(stoneObj,m6);
  detectollision(stoneObj,m7);
  detectollision(stoneObj,m8);
  detectollision(stoneObj,m9);
  detectollision(stoneObj,m10);
  detectollision(stoneObj,m11);
  
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  sling.attach(stoneObj.body);
	}
}

  function detectollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  
  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance <= lmango.r+lstone.r)
 {
   Matter.Body.setStatic(lmango.body , false);
 } 
}
