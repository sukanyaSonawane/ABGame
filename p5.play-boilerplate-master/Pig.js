class Pig{
    constructor(x,y){

        this.body=Bodies.rectangle(x,y,30,30,{restitution:1});
        World.add(myWorld, this.body);
        this.width = 30;
        this.height = 30;
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}