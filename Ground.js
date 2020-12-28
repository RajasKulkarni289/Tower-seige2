class Ground{
    constructor(x,y,wid,hei){
        var ops={
            isStatic:true,
            density:1
        }
        this.body=bodies.rectangle(x,y,wid,hei,ops);
        this.width=wid;
        this.height=hei;

        wor.add(myworld,this.body);
}
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("grey");
        rect(pos.x,pos.y,this.width,this.height);
    }
}