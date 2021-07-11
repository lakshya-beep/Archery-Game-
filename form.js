class Form {
    constructor(){
        this.input = createInput('').attribute("placeholder","username");
        this.enter = createButton('Play');
        this.greetings = createElement('h3');
        this.title = createElement('h1').style("color","white");
        this.slingshot = createButton("slingshot");
        this.shot = createButton("shot");
        this.chooser = createElement("p");
        this.warner = createElement("p");

        
        
    }

    display(){
        this.title.html("ARCHERY GAME");
        this.title.position(displayWidth/2-110,50)

        this.input.position(675, 200);
        this.enter.position(740, 250);



        this.enter.mousePressed(()=>{
            this.input.hide();
            this.enter.hide();
            this.title.hide();
            
            playername = this.input.value();

            this.greetings.html("Hello " + playername );
            this.greetings.position(50, 20);

            this.chooser.html("Choose 1 of 2");
            this.chooser.position(displayWidth/2-10,displayHeight/2);


            this.slingshot.position(displayWidth/2-200,300);
            this.shot.position(displayWidth/2+200,300);
            
            this.slingshot.mousePressed(()=>{
                this.warner.html("press Space bar (_) to reload the sling");
                this.warner.position(displayWidth/2-50,displayHeight/2+100)

                this.slingshot.hide();
                this.shot.hide();
                this.chooser.hide();

                line1 = new Box(100,200,70);
                rope = new Bow(line1.body, {x:200, y:400});
                ground = new Ground(displayWidth/2,720,displayWidth,20);
            holder = 1;
            })
            this.shot.mousePressed(()=>{
                this.slingshot.hide();
                this.shot.hide();
                this.chooser.hide();

                ex = new Box(100,20,80);
                ground = new Ground(displayWidth/2,720,displayWidth,20);
            holder=2;
            })
           
          });
    }

hide(){
    this.greetings.hide();
}
}
