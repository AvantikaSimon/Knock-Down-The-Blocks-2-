class Box{
    constructor(x, y, width, height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
      this.body = Bodies.rectangle(x, y, width, height, options);  
      this.image1 = loadImage("sprites/wood1.png");
    World.add(world, this.body);
    }
display(){
rect(this.body.position.x, this.body.position.y, this.body.width, 30, 30);
if(this.body.speed<3){
super.display();
}
else {
World.remove(world, this.body);
push();
this.visibility = this.visibility - 5;
tint(255, this.visibility);
}
  } 
}