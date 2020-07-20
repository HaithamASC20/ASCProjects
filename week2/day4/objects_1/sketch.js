let ballArray = [];
 
function setup() {
   createCanvas(500, 500);
   background(0);

   let ball1 = new Ball(250,100,255,0,0);
   let ball2 = new Ball(250,200,0,255,0);
   let ball3 = new Ball(250,300,0,0,255);
   let ball4 = new Ball(250,400,255,255,255);

   ballArray.push(ball1);
   ballArray.push(ball2);
   ballArray.push(ball3);
   ballArray.push(ball4);
}
 
function draw() {
   for(let i =0; i<ballArray.length; i++){
       fill(ballArray[i].r,ballArray[i].g,ballArray[i].b);
       ellipse(ballArray[i].x,ballArray[i].y,100,100);
   }
}
 
class Ball {
    constructor(x,y,r,g,b){
        this.x = x;
        this.y = y;
        this.r = r;
        this.g = g;
        this.b = b;
    }
 
}
