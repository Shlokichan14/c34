class Rope{
    constructor(bodyA,pointB){
    var options = {
        length : 250,
        stiffness : 1.2,
        bodyA : bodyA,
        pointB : pointB
    }
    this.rope = Constraint.create(options);
World.add(world,this.rope);
    }
display(){
    var point1 = this.rope.bodyA.position;
    var point2 = this.rope.pointB; 
    line(point1.x,point1.y,point2.x,point2.y);
}    
}