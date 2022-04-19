let angle;
let angleVel;
let radDist;
let dia;
let r, g, b;


function setup() {
  frameRate(5);
  createCanvas(500, 400);
  background(220);


  angle = 0;
  angleVel = 0.2; // angular velocity
  radDist = 100; // radial distance
  dia = 30; // diameter
 r = 255;
  g = 0;
  b = 255;
  a = 255;
  
}

function draw() {

  // update the angle
  angle = angle + angleVel;
  if (mouseIsPressed) {
    r = r + 3;
  } else {
    r = r - 2;
  }
  
  r = constrain(r, 0, 255);
  
  
  // calculate the position
  x = width/2 + cos(angle) * radDist;
  y = height/2 + sin(angle) * radDist;
  noStroke();
  fill(r, g, b, a);
  // display the circle
  circle(x, y, dia);
}
