const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon,slingshot;
var ground,ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;




function setup() {
  createCanvas(800,400); 
  engine = Engine.create();
  world = engine.world;

ground=new Ground(400,380,800,20);
//ground1=new Ground(380,280,150,10);
//ground2=new Ground(510,110,150,10);
//ground3=new Ground(620,240,150,10);
box1= new Box(330,250);
box2= new Box(370,250);
box3= new Box(340,200);
box4= new Box(410,250);
box5= new Box(380,200);
box6= new Box(480,80);
box7= new Box(520,80);
box8= new Box(580,210);
box9= new Box(620,210);
box10= new Box(600,160);
polygon= new Polygon(100,200);

slingshot= new SlingShot(polygon.body,{x:100,y:200});
}

function draw() {
  background(255);  
  
  ground.display();
  //ground1.display();
 // ground2.display();
 // ground3.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  polygon.display();
  slingshot.display();
  detectCollision(polygon,box1);
  detectCollision(polygon,box2);
  detectCollision(polygon,box3);
  detectCollision(polygon,box4);
  detectCollision(polygon,box5);
  detectCollision(polygon,box6);
  detectCollision(polygon,box7);
  detectCollision(polygon,box8);
  detectCollision(polygon,box9);
  detectCollision(polygon,box10);
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
  }
  
  function mouseReleased(){
   slingshot.fly();
  
  
  }
   /* function touching(polygonX,boxX){
   if (polygonX.isTouching(boxX)){

   Matter.Bodies.setStatic(boxX.body,false);
   }


   }*/
   function detectCollision(polygonX,boxX){
    polygonXp= polygonX.body.position;
    boxXp= boxX.body.position;
    var distance=dist(polygonXp.x,polygonXp.y,boxXp.x,boxXp.y)
    if(distance <= polygonX.r+boxX.r){
     
      Matter.Body.setStatic(boxX.body,false);
    
    }
  }
  function keyPressed(){
    if(keyCode ===32){
   slingshot.attach(polygon.body)

    }
  }