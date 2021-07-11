class Bow{
    constructor(first,second){
    
        var options={
        bodyA: first,
        pointB: second,
        stiffness: 0.8,
        length : 50

        }

        this.bow=Constraint.create(options);
        World.add(myworld,this.bow);
        

    }


display(){
    if(this.bow.bodyA){

    
    var positionholder1;
    var positionholder2;
    positionholder1=this.bow.bodyA.position;
    positionholder2=this.bow.pointB;


   

    push();
    strokeWeight(7);
    line(positionholder1.x,positionholder1.y,positionholder2.x,positionholder2.y);
   // line(positionholder1.x-30,positionholder1.y,positionholder2.x,positionholder2.y+200);


    pop();
    }
}

fly(){
    this.bow.bodyA = null;
};



reattach(body){
    this.bow.bodyA = body;
}

};




















