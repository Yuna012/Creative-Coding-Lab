//Press your mouse to add beautiful flowers. Feel free to drag them too!
//Move your pointer to left or up to see the season changing.
let flowerColors = ["#F25E7A", "#F2C029", "#BF3B3B", "#F26363", "#D85E91","#A656FC","#4F8C11"];
let x, y;
let xSpd, ySpd;
let flowerSize;
let posX, posY;
let scaleValue;

let leaves = [];
let leaf;

let rose = [];

//Image texture
let tex;

function preload() {
  leaf = loadImage("leaf.png");
  tex = loadImage("paperTex.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  tex.resize(width, height);
  leaf.resize(65, 70);
  
  strokeWeight(0.3);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background("#E6FFBE");

  tint(255, 100); //process the image (limit transparency)
  image(tex, 0, 0);

  for (let i = 0; i < leaves.length; i++) {
    leaves[i].display();
  }
  
  for (let i = 0; i < rose.length; i++) {
    rose[i].move();
    rose[i].display();    

    //When the flower falls down completely, then the leaves are created.
    if (rose[i].bool == true){
      for (let k = 0; k < 3; k++) {
        let randX = random(5+rose[i].x, 5+rose[i].x);
        let randY = random(400-rose[i].y, 40+rose[i].y);
        leaves.push(new Green(randX, randY));
      }
    }
  }

  //if mouse is pressed, the flowers of random colors are created. 
  if (mouseIsPressed) {
    let randNumCol1 = parseInt(random(4));
    let randCol1 = flowerColors[randNumCol1];

    let randNumCol2 = parseInt(random(7));
    let randCol2 = flowerColors[randNumCol2];

    let randSize = random(20, 80);
    rose.push(new Rose(mouseX, mouseY, randSize, randCol1, randCol2));
  }
}

class Rose {
  constructor(x, y, randSize, col1, col2) {
    this.x = x;
    this.y = y;
    this.xs = 0;
    this.ys = 0;
    this.s = 1;
    this.randomSize = randSize;
    this.col1 = col1;
    this.col2 = col2;
    this.bool = false;
  }
  move() {
    this.ys++;
    this.y = this.y + this.ys;
    if (this.y > height) {
      this.y = -this.randomSize;
      this.ys = 0;
      this.bool = true;
    } else {
      this.bool = false;
    }
  }
  
  display() {
    push();
      translate(this.x, this.y);

      fill(this.col2);
      push();
        translate(0, 0);
        for (let i = 0; i < 20; i++) {
          rotate(radians(1100));
      //the petal
          ellipse(30, 0, this.randomSize / 1.75);
        }
      pop();

      fill(this.col1);
    //flower's pistil
      ellipse(0, 0, this.randomSize);

    pop();
  }
}

class Green {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.xs = 0;
    this.ys = 0;
    this.size = random(10,50);
    this.rotate = random(-80, 80);
  }
  
  move() {
  }
  display() {
    push();
      translate(this.x, this.y);
    rotate(this.rotate);
    //If you move your mouse up or to left, you are able to explore the season changing.
      let greenCh = map(mouseX, mouseY, width, 255, 0);
      tint(180, greenCh, 255);
      image(leaf, 0, 0, this.size, this.size);
    pop();
  }
}
