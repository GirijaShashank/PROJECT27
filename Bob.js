class Bob {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          'restitution':0.5,
          'friction':0.3,
          'density':1.5
      }
     
      this.radius = radius;
      this.body = Bodies.circle(x,y,radius,options);
      World.add(world, this.body);
    }
    display(){
      push();
      rectMode(CENTER);
      fill("yellow");
      ellipse(this.body.position.x, this.body.position.y, this.body.radius);
      pop();
    }
  }