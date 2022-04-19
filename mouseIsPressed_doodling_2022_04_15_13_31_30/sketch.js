function setup() {
  createCanvas(400, 400);
}

function draw() {
  if(mouseIsPressed) {
  let a = map(mouseX, 0, 400, 0, 255);
  let b = map(mouseY, 0, 400, 0, 255);
    fill(a, b, 255);
  } else {
  let a = map(mouseX, 0, 400, 0, 255);
  let b = map(mouseY, 0, 400, 0, 255);
    fill(255, a, b);
  }
  noStroke();
  ellipse(mouseX, mouseY, 50);
  }