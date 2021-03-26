const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1, block2, block3, block4, 
block5, block6, block7, block8, 
block9, block10, block11, block12, 
block13, block14, block15, block16,block17, block18, block19, block20,
block21, block22, block23, block24;

var stand1, stand2, ground;

var polygon, polygonImage;

var slingShot;

var backgroundImage;

function preload() {
	polygonImage = loadImage("polygon.png");
  getBackgroundImage();
}

function setup() {
  createCanvas(800,400);
  engine  = Engine.create();
  world = engine.world;

  Engine.run(engine);


  //To hold Blocks
  stand1 = new Stand(315,380,250,15);
  stand2 = new Stand(610,260,200,15);

  //Making ground 
  ground = new Ground(7,395,1600,15);

  //Making Blocks for stand1
  block1 = new Block(315,240,30,40,"grey");

  block2 = new Block(300,277,30,40,"turquoise");
  block3 = new Block(330,277,30,40,"turquoise");

  block4 = new Block(270,315,30,40,"pink");
  block5 = new Block(300,315,30,40,"pink");
  block6 = new Block(330,315,30,40,"pink");
  block7 = new Block(360,315,30,40,"pink");

  block8 = new Block(241,353,30,40,"skyBlue");
  block9 = new Block(270,353,30,40,"skyBlue");
  block10 = new Block(299,353,30,40,"skyBlue");
  block11 = new Block(330,353,30,40,"skyBlue");
  block12 = new Block(361,353,30,40,"skyBlue");
  block13 = new Block(392,353,30,40,"skyBlue");


  //Making Blocks for stand2
  block14 = new Block(550,237,30,40,"skyBlue");
  block15 = new Block(580,237,30,40,"skyBlue");
  block16 = new Block(610,237,30,40,"skyBlue");
  block17 = new Block(640,237,30,40,"skyBlue");
  block18 = new Block(670,237,30,40,"skyBlue");

  block19 = new Block(580,197,30,40,"pink");
  block20 = new Block(610,197,30,40,"pink");
  block21 = new Block(640,197,30,40,"pink");

  block22 = new Block(595,157,30,40,"turquoise");
  block23 = new Block(625,157,30,40,"turquoise");

  block24 = new Block(610,117,30,40,"grey");

  //polygon with sling
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  if(backgroundImage)
  background(backgroundImage); 

  
  fill("white");
  textSize(23);
  text("Drag the Hexagonal Stone and release it, to launch it towards the blocks",25,37)
  fill("white");
  textSize(20);
  text("Press space to get a chance to play again!",160,65)
  //console.log(mouseX+","+mouseY)

  stand1.display(); 
  stand2.display();

  block1.display();
  block2.display();
  block3.display(); 
  block4.display();
  block5.display(); 
  block6.display(); 
  block7.display(); 
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();

  ground.display();

  imageMode(CENTER);
  image(polygonImage, polygon.position.x, polygon.position.y, 55, 55);

  slingShot.display();

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    slingShot.attach(this.polygon);
  }
}

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=06 && hour<=18){
     bg = "light.jpg";
  }
  else{
     bg = "night.jpg";
  }
  backgroundImage = loadImage(bg)
}