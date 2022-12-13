const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var CANON;


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  canonImage=loadImage("./assets/CANON.png");

}
function setup() {
  createCanvas(900,900);

  engine = Engine.create();
  world = engine.world;

  tower = new Tower(150, 350, 160, 310);
  canon=new Canon(100,150,60,50);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);
    tower.display();
    canon.display();

 
}

