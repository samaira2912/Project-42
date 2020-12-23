var hr;
var mn;
var sc;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);

}

function draw() {
  background(255,255,255); 
  
  translate(100, 100)


  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  minAngle = map(mn, 0, 60, 0, 360)
  hrAngle = map(hr % 12, 0, 12, 0, 360)

  //seconds
  push();
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //minutes
  push();
  rotate(minAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();

  //hour
    push();
    rotate(hrAngle);
    stroke(0, 0, 255);
    strokeWeight(7);
    line(0, 0, 50, 0);
    pop();
  
  drawSprites();

}


