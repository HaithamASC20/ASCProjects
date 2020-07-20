let rect1Y = 200;
let rect2Y = 200;
let ballX = 250;
let ballY = 250;
let ballXDirection = 0;
let ballYDirection = 0;
ballXDirection = -1.5;
ballYDirection = -1.5;
let ballR = 255;
let ballG = 255;
let ballB = 255;

let rect1R,rect1G,rect1B,rect2R,rect2G,rect2B = 255;
function setup(){
    createCanvas(500,500);
    background(0);

}
function keyPressed(){
    if(keyCode == KeyW){
        rect2Y -= 3;
    }
    if(keyCode == KeyS){
        rect2Y += 3;
    }
}

function draw(){
    background(0);
    fill(0,255,255);
    rect(200,400,100,50);
    fill(255,0,0);
    text("Restart",230,430);
    ballX += ballXDirection;
    ballY += ballYDirection;
    fill(255,255,255);
    fill(rect1R,rect1G,rect1B);
    rect(75,rect1Y,30,100);
    fill(255,255,255);
    fill(rect2R,rect2G,rect2B);
    rect(395,rect2Y,30,100);
    if (ballX < 120 && ballY < rect1Y +100 && ballY > rect1Y){
        ballXDirection *= -1;
        ballR = random(0,255);
        ballG = random(0,255);
        ballB = random(0,255);
        rect1R = random(0,255);
        rect1G = random(0,255);
        rect1B = random(0,255);
    }
    if (ballX > 380 && ballY < rect2Y +100 && ballY > rect2Y){
        ballXDirection *= -1;
        
        ballR = random(0,255);
        ballG = random(0,255);
        ballB = random(0,255);
        rect2R = random(0,255);
        rect2G = random(0,255);
        rect2B = random(0,255);
    }
    if (ballY < 15){
       ballYDirection *= -1;
    }
    if (ballY > 485){
        ballYDirection *= -1;
     }
    if(ballX>485){
        fill(255,255,255);
        text("Player 1 Wins!",200,50);
    }else if (ballX<15){
        fill(255,255,255);
        text("Player 2 Wins!",200,50);
    }
    fill(ballR,ballG,ballB);
    ellipse(ballX + ballXDirection,ballY + ballYDirection,30,30);
    
    if (keyIsDown(UP_ARROW)){
        rect1Y -= 3;
    }
    
    if (keyIsDown(DOWN_ARROW)){
        rect1Y += 3;
    }
    if (keyIsDown(87)){
        rect2Y -= 3;
    }
    if (keyIsDown(83) ){
        rect2Y += 3;
    }
    
}


function mouseClicked(){
    if(mouseX > 200 && mouseY>400 && mouseX<300 && mouseY<450){
        ballX = 250;
        ballY = 250;
        rect1Y = 200;
        rect2Y = 200;

    }

}