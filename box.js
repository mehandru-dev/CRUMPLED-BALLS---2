
 class Box {  
  constructor(x, y, radius){
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.3,
          'isStatic' : false
      }
       this.radius = 20
      this.body = Bodies.circle(x, y, 20, options);
    World.add(world, this.body);
    this.image= loadImage("paper.png");
    this.x=x;
    this.y=y;
      
 }
 display(){
  
  fill("white");
  stroke("white");
  ellipseMode(RADIUS);
  ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
  imageMode(RADIUS);
  image(this.image,this.body.position.x-20-6,this.body.position.y-10-10-4+2+1+2, 50,50);
  
 }
}
