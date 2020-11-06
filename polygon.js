class Polygon{

constructor(x,y){
var options={
    isStatic:false,
restitution:0.8,
density:1.0,
friction:0

}
this.body=Bodies.rectangle(x,y,40,40,options);
this.width=40;
this.height=40;
World.add(world,this.body);
this.image=loadImage("polygon.png")
}
display(){
fill("green");
push()
var p= this.body.position;
imageMode(CENTER);
image(this.image,p.x,p.y,this.width,this.height);
pop()

    
}






}