let state = "circle";
function setup() {
    createCanvas(500, 500);
    background(200, 200, 200);
 }
  
function draw() {
   let r = random(0, 255);
   let g = random(0, 255);
   let b = random(0, 255);
   let opacity = random (120, 180);
   fill(r, g, b, opacity);
   noStroke();
  
   let size = random(5, 35);
   let offSetX = random(-25, 25);
   let offSetY = random(-25, 25);
   if(state == "circle"){
        ellipse(mouseX + offSetX, mouseY + offSetY, size, size);
   } else if (state == "square"){
        rect(mouseX + offSetX, mouseY + offSetY, size, size);   
   }else if (state == "triangle"){
        triangle(mouseX, mouseY, mouseX - size, mouseY + size,mouseX + size, mouseY + size);
   }
}

  
function mouseClicked() {
   if(state == "circle"){
       state = "square";
   }else if (state == "square"){
       state = "triangle";
   }else if (state == "triangle"){
       state = "circle";
   }
}
 