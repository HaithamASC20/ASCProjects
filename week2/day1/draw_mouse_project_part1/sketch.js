function setup() {
   createCanvas(500, 500);
   background(0, 0, 0);
}
 
function draw() {
  
}
 
function mouseClicked() {
   r = random(0, 255);
   g = random(0, 255);
   b = random(0, 255);
   fill(r, g, b);
   l = random (25,100);
   
   ellipse(mouseX, mouseY, l, l);
}
