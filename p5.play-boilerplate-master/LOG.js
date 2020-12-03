class Log{
    constructor(x,y,width,height,angle){

        this.body=Bodies.rectangle(x,y,width,height,{restitution:1,friction:1});
        World.add(myWorld, this.body);
        this.width = width;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        angleMode(RADIANS);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }
}