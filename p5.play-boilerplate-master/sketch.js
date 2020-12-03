const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld, ground_1;
var pig1,box1,box2, log1;
var pig2,box3,box4,log2;
var box5, log3,log4;

function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground_1 = new ground(600,390,1200,20);


  box1 = new Box(200,360,50,50);
  box2 = new Box(300,360,50,50);
  
  pig1 = new Pig(240,360);
  log1 = new Log(250,300,180,20,PI/2);
  console.log(log1);
 // box3 = new Box(200,250,50,50);
  //box4 = new Box(300,250,50,50);
  //pig2 = new Pig(250,250);
  //log2 = new Log(250,200,180,20,PI/2);

 // box5 = new Box(250,150,50,50);
 // log3 = new Log(200,150,20,100,PI/7);
  //log4 = new Log(300,150,20,100,-PI/7);
}

function draw() {
  background(255,255,255);
  Engine.update(myEngine);
 
  ground_1.display();
  box1.display();
  box2.display();
  pig1.display();
  log1.display();
 /* box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();*/
//  log3.display();
 // log4.display();
}