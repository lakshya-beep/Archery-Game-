class Box{
    constructor(x,y,r){
    
        var options={
            stiffness:1,
            restitution: 0.8

        }

        this.body = Bodies.circle(x,y,r,options);
        World.add(myworld,this.body);

        this.r = r;

    }

    display(){
        var pos = this.body.position;
        push();
        fill("red");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r, this.r);
        push();
    }
}







