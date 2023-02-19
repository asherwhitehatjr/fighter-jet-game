var background_img;
var fighterjet_img;
var enemyfighterjet_img;

var fighterjet;
var enemyfighterjet_1;
var enemyfighterjet_3;
var enemyfighterjet_3;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  background_img = loadImage("background red.png");
  fighterjet_img = loadImage("fighter jet f51.png");
  enemyfighterjet_img = loadImage("enemy fighter jet1.png");


}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	fighterjet = createSprite(1100,200,20,10);
	fighterjet.addImage(fighterjet_img);
	fighterjet.scale = 0.1;
  
	enemyfighterjet_1 = createSprite(200,200,20,10);
	enemyfighterjet_1.addImage(enemyfighterjet_img);
	enemyfighterjet_1.scale = 0.1;
  
	enemyfighterjet_2 = createSprite(200,90,20,10);
	enemyfighterjet_2.addImage(enemyfighterjet_img);
	enemyfighterjet_2.scale = 0.1;
  
	enemyfighterjet_3 = createSprite(200,300,20,10);
	enemyfighterjet_3.addImage(enemyfighterjet_img);
	enemyfighterjet_3.scale = 0.1;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(background_img,0,0,1500,850);
  
  drawSprites();
 
}



