class Rope {

    constructor(a, b, xOffset,yOffset){

        var options  = {

            bodyA : a,
            bodyB : b,
            pointB : { x : xOffset, y:yOffset}
         
            
        }

        this.rope  = Constraint.create(options);
        World.add(world,this.rope);

    }

    display(){

        var pointA  = this.rope.bodyA.position;
        var pointB  = this.rope.bodyB.position;

        line(pointA.x, pointA.y-25,pointB.x+this.rope.pointB.x, pointB.y);
    }


}