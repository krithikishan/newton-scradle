class Roof {

    constructor(x,y){

       this.body =  Bodies.rectangle(x,y,300,20, {isStatic: true});
       World.add(world, this.body);
       this.w  = 300;
       this.h  = 20;

    }

    display(){

        push()
        fill("orange");
        rectMode(CENTER);
        rect(this.body.position.x , this.body.position.y, this.w , this.h);
        pop()

    }

}