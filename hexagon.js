class HG{
    constructor(x,y){
        var ops={
            restitution:0.8,
            density:1
        }
        this.image=loadImage("polygon.png");
        this.body=bodies.rectangle(x,y,50,50,ops);
        this.width=50;
        this.height=50;

        wor.add(myworld,this.body);
}
    display(){
        var pos=this.body.position;
        
        var ang=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}