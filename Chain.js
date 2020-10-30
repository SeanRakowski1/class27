class Chain{

    constructor(bodyA,bodyB){

        
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 4
        }  
         var chain = Constraint.create(options);
        World.add(world,chain);
    }

    display(){
        var pointA= this.chain.bodyA.position;
        var pointB= this.chain.bodyB.position;
        strokeWeight(4);
        console.log(this.chain.bodyA.position);
        console.log(this.chain.bodyB.position);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }

}