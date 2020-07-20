let ballArray = [];
 
function setup() {
    createCanvas(500, 500);
    noStroke();
    background(0);
}
 
function draw() {
    background(0);
    
    for (let i = 0; i < ballArray.length; i++) {
        fill(ballArray[i].r, ballArray[i].g, ballArray[i].b, ballArray[i].a); 
        ellipse(ballArray[i].x,ballArray[i].y,25,25);
        ballArray[i].x += random(-5,5);
        ballArray[i].y += random(-5,5);
        ballArray[i].a -=1;
    
    }
}

function mouseClicked(){
    for(let i = 0; i<10;i++){
        let ball = new Ball(mouseX,mouseY,random(255),random(255),random(255),random(255));
        ballArray.push(ball)
    }
}
 
class Ball {
    constructor(x, y, r, g, b, a) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
}
