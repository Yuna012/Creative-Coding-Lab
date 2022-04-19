let bubbleArray = [];
let bubbleSize = 1;
let colArray = 1;
let colors = ["#C2F2FF", "#FFA9C9", "#FDFFCE", 
"#C2C6FF", "#F1FAF1", "#59BBFD"];

function setup() {
  createCanvas(400, 400);
  
  for(let i=0; i<bubbleSize; i++) {
    let bubbleSize = random(80, 10);
    let posX = bubbleSize/3 +random(width - bubbleSize - 1);
    let posY = bubbleSize/2 +random(height-bubbleSize-1);
    let speedX = random(1, -1);
    let speedY = random(1, -1);
    let colArray = parseInt(random(6));
    bubbleArray[i] = new Bubble(posX, posY, speedX, speedY, bubbleSize, colArray);
  }
}

function draw() {
  background(250);
  
  for (let i = 0; i<bubbleArray.length; i++) {
    bubbleArray[i].movefunction();
    bubbleArray[i].displayBubble();
  }
}

function mousePressed() {
  let newbubble = new Bubble(mouseX, mouseY, random(10, -5), random(1, -5), random(50, 180), parseInt(random(6)));
  bubbleArray.push(newbubble);
  console.log(bubbleArray.length)
}

class Bubble{
  constructor(x, y, speedX, speedY, size, setCol){
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;
    this.setCol = setCol;
    this.setColSine = parseInt(random(6));
  }
  movefunction() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    
    if (this.x > width - this.size/2 || this.x < this.size/2) {
      this.speedX *= -1;
    }
    if (this.y > height - this.size/2 || this.y < this.size/2) {
      this.speedY *= -1;
    }
  }
  
  displayBubble() {
    stroke(colors[this.setCol]);
    noFill();
    ellipse(this.x, this.y, this.size, this.size);
    
    
  }
}