const eng=Matter.Engine;
const wor=Matter.World;
const bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var myeng,ground,myworld,box1,box2;
function setup() {
  createCanvas(1200,400);
  myeng=eng.create();
  myworld=myeng.world;

    ground1=new Ground(600,230,200,20);
    ground=new Ground(600,height,1200,5);
    box1=new Box(595,220,30,30);
    box2=new Box(620,180,30,30);
    box3=new Box(580,220,30,30);
    box4=new Box(630,220,30,30);
    box5=new Box(590,180,30,30);
    box6=new Box(605,160,30,30);
    hexa=new HG(10,10);
    rope = new MD(hexa.body,{x:100, y:200});
}

function draw() {
  background("black");  
  eng.update(myeng);
  ground.display();
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  hexa.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hexa.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  rope.fly();
}