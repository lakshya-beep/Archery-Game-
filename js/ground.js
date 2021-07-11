class Ground{
    constructor(x,y,w,h){
    
        var o= {
            isStatic : true
        }
        
        this.body = Bodies.rectangle(x,y,w,h,o);
        World.add(myworld,this.body);

        this.w = w;
        this.h =h;
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("brown");
        rectMode(CENTER);
        rect(0,0,this.w, this.h);
        pop();
    }
}



