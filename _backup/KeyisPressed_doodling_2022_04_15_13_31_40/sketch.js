function setup() {
  createCanvas(400, 400);
}

function draw() {
  if(keyIsPressed) {
  let x = map(mouseX, 0, 400, 0, 255);
  let y = map(mouseY, 0, 400, 0, 255);
    fill(x, y, 255);
  } else {
  let x = map(mouseX, 0, 400, 0, 255);
  let y = map(mouseY, 0, 400, 0, 255);
    fill(255, x, y);
  }
  stroke(1);
  ellipse(mouseX, mouseY, 50);
  }