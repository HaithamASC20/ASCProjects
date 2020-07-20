let yPos = 25;
let xPos;
function setup() {
    
    createCanvas(500, 500);
    background(0);
    fill(0,255,0);
}
 
function draw() {
   background(0,20);
   ellipse(250, yPos, 50, 50);
 
   yPos += 3;
 
   if (yPos > 525) {
       yPos = 250;
       xPos = 25;
   }
}

function mouseClicked(){
    background(0);
    fill(random(0,255), random(0,255), random(0,255));
    ellipse(250, yPos, 50, 50);
    
 
    

    yPos = 25;
    
}
