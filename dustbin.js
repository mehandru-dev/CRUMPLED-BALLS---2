
  
class Dustbin{constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=120;
		this.dustbinHeight=120;
		this.wallThickness=7;
		this.angle=0;	
		this.image= loadImage("dustbingreen.png");
		this.bottomBody=Bodies.rectangle(this.x, this.y+2, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2-2-2-1, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2-2-2-1, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
    World.add(world, this.rightWallBody);
  

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			imageMode(CENTER);
      image(this.image, this.x,this.y-50-20+2+1+1+2+2, this.dustbinWidth, this.dustbinHeight);

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
		
			angleMode(RADIANS)
      fill("white");
      stroke("white");
		
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
		
			
			angleMode(RADIANS)
			fill("white");
      stroke("white");
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
		
		stroke("grey");
			angleMode(RADIANS)
      fill("grey")
			rect(0,0,this.dustbinWidth, this.wallThickness);
      pop()
      
			
	}

}
