let angle, angle1;
let angleVel, angleVel1;
let radDist, radDist1;
let dia, dia1;

function setup() {
  createCanvas(800, 800);
  frameRate(3);

  angle = 0;
  angleVel = 0.8; // angular velocity
  radDist = 10; // radial distance
  dia = 85; 

  angle1 = 0;
  angleVel1 = 0.8; // angular velocity
  radDist1 = 10; // radial distance
  dia1 = 85; 

}

function draw() {
  background(250);
  
 angle = angle + angleVel;

  // calculate the position
  x = width/2 + cos(angle) * radDist;
  y = height/2 + sin(angle) * radDist;
  
  push();
  stroke("#2d9bef");
  translate(-110, -100);
  strokeWeight(12);
  noFill();
  circle(x, y, dia);
  pop();
  
  push();
  stroke("#000000");
  translate(0, -100);
  strokeWeight(12);
  noFill();
  circle(x, y, dia);
  pop();
  
  push();
  stroke("#db0909");
  translate(110, -100);
  strokeWeight(12);
  noFill();
  circle(x, y, dia);
  pop();
  
  x1 = width/2 + cos(angle) * radDist;
  y1 = height/2 + sin(-angle) * radDist;
  
  push();
  stroke("#fec200");
  translate(-53, -30);
  strokeWeight(12);
  noFill();
  circle(x1, y1, dia1);
  pop();
  
  push();
  stroke("#367919");
  translate(53, -30);
  strokeWeight(12);
  noFill();
  circle(x1, y1, dia1);
  pop();
}