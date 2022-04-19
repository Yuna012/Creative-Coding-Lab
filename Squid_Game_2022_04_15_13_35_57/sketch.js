let colors = ["#BAD2EC","#078B33", "#BC0606", "#FDCE11", "#0058B0", "#E53030", "#CC3333"];
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("#BAD2EC");
  
  push();
  noFill();
  stroke("#078B33");
  strokeWeight(15);
  circle(90, 400, 60);
  pop();
  
  push();
  noFill();
  stroke("#BC0606");
  strokeWeight(15);
  triangle(200, 430, 230, 380, 260, 430);
  pop();
  
  push();
  noFill();
  stroke("#FDCE11");
  strokeWeight(15);
  beginShape();
  vertex(365, 365);
  vertex(378, 390);
  vertex(400, 390);
  vertex(383, 410);
  vertex(389, 430);
  vertex(365, 420);
  vertex(344, 430);
  vertex(348, 410);
  vertex(330, 390);
  vertex(355, 390);
  vertex(365, 365);
  endShape();
  pop();
  
  push();
  noFill();
  stroke("#0058B0");
  strokeWeight(15);
  beginShape();
  vertex(480, 365);
  vertex(490, 370);
  curve(485, 370, 495, 376, 506, 385, 513, 395);
  vertex(510, 395);
  vertex(480, 395);
  vertex(480, 425);
  endShape();
  
  beginShape();
  curve(480, 430, 475, 434, 467, 436, 462, 430);
  endShape();
  
  beginShape();
  vertex(480, 395);
  vertex(448, 395);
  endShape();
  
  beginShape();
  curve(446, 393, 460, 378, 470, 371, 480, 365);
  vertex(480, 365);
  endShape();
  pop();
  
  
  drawCreature(mouseX, mouseY, 0);

}

function drawCreature(x, y, d, s) {
  push();
  translate(x, y);
  
  drawFace(0, 0, 0, 1.0);
  drawMain(0, -40, 0, 1.0);
  drawArms(-10, -40, 0, 1.0);
  drawArm(10, -40, 0, 1.0);
  drawLeg(-10, -80, 0, 1.0);
  drawLegs(10, -80, 0, 1.0);
  pop();
}

function drawFace(x, y, d, s) {
  push();
  translate(x, y);
  rotate(d);
  scale(s);
  fill(0);
  stroke("#E53030");
  strokeWeight(10);
  ellipse(100, 100, 100, 100);
  stroke(255);
  strokeWeight(4);
  square(83, 85, 35);
}

function drawMain(x, y, d, s) {
  push();
  translate(x, y);
  rotate(d);
  scale(s);
  fill("#E53030");
  stroke("#CC3333");
  strokeWeight(10);
  rect(60, 190, 85, 85);
  pop();
  
  //belt
  push();
  translate(x, y);
  stroke(0);
  strokeWeight(8);
  line(60, 240, 148, 240);
  pop();
  
  //zipper
  push();
  translate(x, y);
  stroke(0);
  line(102, 240, 102, 190);
  pop();
}

function drawArms(x, y, d, s) {
  push();
  translate(x, y);
  rotate(d);
  scale(s);
  fill("#E53030");
  stroke("#CC3333");
  strokeWeight(5);
  ellipse(55, 230, 15, 85);
  pop();
}

function drawArm(x, y, d, s) {
  push();
  translate(x, y);
  rotate(d);
  scale(s);
  fill("#E53030");
  stroke("#CC3333");
  strokeWeight(5);
  ellipse(150, 230, 15, 85);
  pop();
}

function drawLeg(x, y, d, s) {
  push();
  translate(x, y);
  rotate(d);
  scale(s);
  fill("#E53030");
  noStroke();
  rect(65, 310, 45, 75);
  pop();
  
  //shoe
  push();
  translate(x, y);
  fill(0);
  noStroke();
  rect(65, 355, 45, 30);
  pop();
}

function drawLegs(x, y, d, s) {
  push();
  translate(x, y);
  rotate(d);
  scale(s);
  fill("#E53030");
  noStroke();
  rect(95, 310, 45, 75);
  pop();
  
  //shoe
  push();
  translate(x, y);
  fill(0);
  noStroke();
  rect(95, 355, 45, 30);
  pop();
}