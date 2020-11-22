class Rock {
    constructor(x,y,radius) {
      var options = {
          'restitution': 0.8,
          'friction': 1.0,
          'density': 1.0
      }
      var test;
      this.body = Bodies.circle(x,y,radius,options);
      this.r = radius; 
      this.image = loadImage("Images/stone.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      
      
      image(this.image,pos.x,pos.y,this.r,this.r);
   
    }
  }