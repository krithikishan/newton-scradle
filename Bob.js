class Bob {

    constructor(x){

        var options  = {

                
                density : 0.8,
                restitution:1

        }

        this.body  = Bodies.circle(x,450,25, options);
        World.add(world,this.body);
        this.r  = 25

    }

    display(){

         //fill("pink")
        circle(this.body.position.x, this.body.position.y,this.r*2);

    }

}