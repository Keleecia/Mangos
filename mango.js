class Mango 
{
    constructor(x,y,radius)
    {
     var options = 
     {
         isStatic:true,
         'restitution': 0.8,
         'friction': 1.0,
         'density': 1.0
     }
     this.body = Bodies.circle(x,y,radius,options);
     World.add(world,this.body);
     this.image = loadImage("Images/mango.png");
      
     this.r = radius; 
    }

    display()
    {
     var pos = this.body.position;
     image(this.image, pos.x, pos.y,40 ,40);
    }

}