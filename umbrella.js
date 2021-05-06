class Umbrella {
    constructor(x, y) {
        var options ={
            isStatic: true,
        }
        this.radius= 50;
        this.umbrella = Bodies.circle(x, y,50,options);          
        this.image = loadImage("images/Walking Frame/walking_5.png");
        World.add(world, this.umbrella);
    }

    display() {
        var pos = this.umbrella.position;
       imageMode(CENTER);
      image(this.image,pos.x,pos.y+70,300,300);
    }
};