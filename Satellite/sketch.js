function setup() {
  createCanvas(windowWidth, windowHeight);
   x = 50;
  y = 200;
  xSpeed = 8;
  ySpeed = 3;
}

function draw() {
  background("#1b274e");
  
  push();
  for (let i = 2; i < 8; i += 10) {
  noStroke();
  fill(250, 0, 0);
  if(mouseX, mouseY < 300){
    fill(160, 50, 250);
  }
   }
  beginShape();
  vertex(80, 80);
  vertex(75, 68);
  vertex(65, 65);
  vertex(58, 68);
  vertex(50, 80);
  vertex(55, 94);
  vertex(65, 103);
  vertex(75, 109);
  vertex(80, 110);
  vertex(85, 109);
  vertex(95, 103);
  vertex(103, 94);
  vertex(110, 80);
  vertex(103, 68);
  vertex(95, 65);
  vertex(85, 68);
  vertex(80, 80);
  endShape();
  pop();
  
  for(let i = 3; i < 10; i+= 34) {
  push();
  noStroke();
  fill(160, 50, 250);
  if(mouseX, mouseY < 300) {
    fill(250, 0, 0);
  }
    translate(width - 210, 200);
    beginShape();
  vertex(80, 80);
  vertex(75, 68);
  vertex(65, 65);
  vertex(58, 68);
  vertex(50, 80);
  vertex(55, 94);
  vertex(65, 103);
  vertex(75, 109);
  vertex(80, 110);
  vertex(85, 109);
  vertex(95, 103);
  vertex(103, 94);
  vertex(110, 80);
  vertex(103, 68);
  vertex(95, 65);
  vertex(85, 68);
  vertex(80, 80);
  endShape();
  pop();
}
  push();
   x = x + xSpeed;
  y = y + ySpeed;

  if (x < 0) {
    x = width;
  } else if (x > width) {
    x = 0;
  }
  if (y < 0) {
    y = height;
  } else if (y > height) {
    y = 0;
  }
  
  stroke(0.25);
  circle(x, y, 5);
  pop();
  
  push();
   x = x + xSpeed;
  y = y + ySpeed;

  if (x < 0) {
    x = width;
  } else if (x > width) {
    x = 0;
  }
  if (y < 0) {
    y = height;
  } else if (y > height) {
    y = 0;
  }
  
  stroke(0.25);
  circle(x, y, 8);
  pop();

  push();
   x = x + xSpeed;
  y = y + ySpeed;

  if (x < 0) {
    x = width;
  } else if (x > width) {
    x = 0;
  }
  if (y < 0) {
    y = height;
  } else if (y > height) {
    y = 0;
  }
  
  stroke(0.25);
  circle(x, y, 3);
  pop();
  
  push();
   x = x + xSpeed;
  y = y + ySpeed;

  if (x < 0) {
    x = width;
  } else if (x > width) {
    x = 0;
  }
  if (y < 0) {
    y = height;
  } else if (y > height) {
    y = 0;
  }
  
  stroke(0.25);
  circle(x, y, 5);
  pop();
  
  push();
   x = x + xSpeed;
  y = y + ySpeed;

  if (x < 0) {
    x = width;
  } else if (x > width) {
    x = 0;
  }
  if (y < 0) {
    y = height;
  } else if (y > height) {
    y = 0;
  }
  
  stroke(0.25);
  circle(x, y, 2);
  pop();
  
  push();
   x = x + xSpeed;
  y = y + ySpeed;

  if (x < 0) {
    x = width;
  } else if (x > width) {
    x = 0;
  }
  if (y < 0) {
    y = height;
  } else if (y > height) {
    y = 0;
  }
  
  stroke(0.25);
  circle(x, y, 3);
  pop();

}