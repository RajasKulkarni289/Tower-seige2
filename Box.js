class Box{
    constructor(x,y,wid,hei){
        var ops={
          restitution:0.8,
          friction:1,
          density:1
        }
        this.body=bodies.rectangle(x,y,wid,hei,ops);
        this.width=wid;
        this.height=hei;

        wor.add(myworld,this.body);
}
display(){
   
    if(this.body.speed < 1){
      rectMode(CENTER);
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      fill("skyblue");
     stroke ("white");
      rect(0,0,this.width,this.height);
      pop();
    }
    else{
      wor.remove(myworld, this.body);
      push();
     fill("skyblue");
     stroke ("white");
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      pop();
    }
    
  }
 
 
 
 };