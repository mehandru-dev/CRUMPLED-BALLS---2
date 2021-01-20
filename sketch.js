
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,wall1;
var ball1,ballImage;
var dustbin1,dustbinImage;

function preload(){




}
function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;
	ground1= new Ground(600,590,1300,20);
	wall1 =new Ground(1190,300,20,900);
	ball1 = new Box(200,585,50,50);
	dustbin1 = new Dustbin(900,585,60,10);
	
	Engine.run(engine);
	
}


function draw() {
  background("white");
  
  Engine.update(engine);
  ground1.display();
  wall1.display();
  ball1.display();
  dustbin1.display();
 
  drawSprites();
 

}

function keyPressed(){
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(ball1.body, ball1.body.position,{x: 80,y: -80});
		
	}
	}
  
  



	


