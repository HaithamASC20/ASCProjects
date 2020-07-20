let r1,r2,r3,g1,g2,g3,b1,b2,b3;

function setup(){
    createCanvas(500,500);
    background(200,200,200);
    fill(255,0,0);
    rect(mouseX, 100, 50, 50);
    fill(0,255,0);
    rect(mouseX, 170, 50, 50);
    fill(0,0,255);
    rect(mouseX, 240, 50, 50);
       

}

function draw(){
    
    background(200,200,200);
    fill(r1,g1,b1);
    rect(mouseX, 100, 50, 50);
    fill(r2,g2,b2);
    rect(mouseX, 170, 50, 50);
    fill(r3,g3,b3);
    rect(mouseX, 240, 50, 50);
    
}   

function mouseClicked(){
    r1 = random(0,255);
    g1 = random(0,255);
    b1 = random(0,255);
    fill(r1,g1,b1);
    rect(mouseX, 100, 50, 50);
    
    r2 = random(0,255);
    g2 = random(0,255);
    b2 = random(0,255);
    fill(r2,g2,b2);
    rect(mouseX, 170, 50, 50);
    
    r3 = random(0,255);
    g3 = random(0,255);
    b3 = random(0,255);
    fill(r3,g3,b3);
    rect(mouseX, 240, 50, 50);
}