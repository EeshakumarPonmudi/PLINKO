class Plinko {
    constructor(x, y) {
      var options = {
          isStatic: true
      }
      this.radius = 10;
      this.body = Bodies.circle(x, y,this.radius,options);
     
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      //pushing a new setting to the object
      push();
        translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      noStroke();
      ellipse(0,0, this.radius, this.radius);
      pop();
      //reverting back to the old setting
    }
  };