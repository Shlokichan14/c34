class Ball{
    constructor(x,y,w,h){
        var options = {
        restitution : 0.7,
        friction : 1,
        density : 0.04,
        }
this.body = Bodies.rectangle(x,y,w,h,options)
World.add(world,this.body);
this.width = w;
this.height = h;
    }
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    //ellipseMode(CENTER);
    ellipse(0,0,this.width,this.height);
    pop();
}    
}