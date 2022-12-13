class Canon
{
    constructor(x,y,width,height)
    {
var options={
    isStatic:true
}
this.width=width;
this.height=height;
this.body=this.bodies.rectangle(x,y,this.width,this.height);
World.add(world,this.body);
    }
    show(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    }
}
    

    
