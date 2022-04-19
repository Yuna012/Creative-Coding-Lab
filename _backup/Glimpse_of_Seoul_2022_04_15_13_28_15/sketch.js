function setup() {
  createCanvas(5000, 5000);
}

function draw() {
  background(220);
noStroke();
colorMode(RGB, 250);
for (let a = 0; a < 1000; a++) {
  for (let b = 0; b < 1000; b++) {
    stroke(a, b, 800);
    point(a, b);
  }

  
let b = color(150);
fill(b);
noStroke();
rect(0, 350, 80, 180);
describe('first building from the left.');
  
fill(b);
noStroke();
  square(100, 390, 130, 20, 10, 0, 0);
  describe('second gray building from the left.') 
  
let f = color (80);
fill(f);
noStroke();
square(100, 390, 105, 20, 0, 0, 0);
describe('dark part of the second building.')
  
fill(b);
  noStroke();
  rect(370, 350, 50, 100);
  describe('building right next to golden')
  
let q = color(205, 180, 150);
fill(q);
noStroke();
rect(330, 440, 100, 40);
  describe('gleaming rect right bottom corner of the golden') 
  
beginShape(TESS);
fill(f);
vertex(340, 245);
vertex(342, 210);
vertex(345, 245);
endShape();
  describe('triangle top of the Golden.')
  
 beginShape(TESS); 
let d = color(255, 205, 0);
  fill(d);
vertex(250, 500);
vertex(250, 250);
vertex(350, 240);
vertex(350, 500);
endShape();
describe('Golden.')

  
  
beginShape(TESS);
let w = color(255, 220, 0);
fill(w);
vertex(350, 500);
vertex(350, 240);
vertex(370, 250);
vertex(370, 500);
endShape();
describe('right part of the Golden.')
  
let c = color(250, 255, 0);
c = color('hsba(205, 10%, 30%, 0.6)');
fill(c);
noStroke();
rect(250, 360, 30, 150);
  describe('reflection of the building.');
  
let e = color(250, 255, 0);
fill(e);
noStroke();
rect(140, 470, 250, 60);
describe(`Yellow building under the Golden.`);
  
fill(b);
noStroke();
rect(430, 380, 110, 110);
  describe('eigth from the left.')

fill(b);
noStroke();
triangle(540, 480, 540, 400, 570, 400);
describe('part of the eighth.')
  
let s = color(100);
  fill(s);
noStroke();
  rect(490, 430, 140, 100)
describe('9; building under the eighth.')

  fill(f);
  noStroke();
  rect(580, 400, 80, 130)
  describe('9; part of the nine.')
 
fill(b);
noStroke();
rect(730, 400, 130, 120)
describe('building 10.')
 
  let i = color(75);
  fill(i);
  noStroke();
  rect(800, 430, 100, 130)
  describe('building 11.')
  
fill(b);
noStroke();
rect(590, 470, 150, 70)
describe('building 12.')
  
let p = color(85);
  fill(p);
  rect(720, 460, 120, 90)
  describe('building 13.')
  
fill(f);
noStroke();
rect(900, 410, 100, 150)
  describe('building 14.')
  
//last building from the left.  
beginShape(TESS);
  fill(b);
vertex(1000, 560);
vertex(1010, 430);
vertex(1000, 240);
  vertex(1100, 260);
  vertex(1110, 430);
  vertex(1100, 560);
endShape();
 
noFill();
beginShape();
fill(d);
  vertex(1000, 560);
  vertex(1010, 430);
  vertex(1000, 280);
endShape();
  
noFill();
  beginShape();
  fill(f);
  vertex(1040, 240);
  vertex(1060, 250);
  vertex(1095, 245);
endShape();
  
let t = color('hsb(160, 100%, 50%)');
  fill(t);
  ellipse(440, 500, 115, 80);
  describe('tree 3.')
  
  fill(t);
  ellipse(50, 500, 125, 90);
  describe('tree 1.')
  
let u = color('hsb(160, 100%, 30%)');
  fill(u);
  ellipse(120, 510, 115, 80);
  describe('tree 2.')

//bridge.
let y = color (40);
fill(y);
rect(0, 520, 2000, 40)
  describe('bridge.')
  
let v = color(0, 0, 250);
  fill(v);
  rect(0, 520, 2000, 5)
  describe('top part of the bridge.')
  
fill(f);
rect(380, 560, 30, 40)

fill(f);
rect(460, 560, 30, 40)

fill(f);
rect(560, 560, 35, 40)
  
fill(f);
rect(670, 560, 35, 40)
  
fill(f);
rect(790, 560, 35, 40)
  
fill(f);
rect(890, 560, 35, 40)
  
fill(f);
rect(1050, 560, 35, 40)
  
//block.
let n = color(150);
  fill(n);
  beginShape(TESS);
  vertex(0, 620);
  vertex(0, 518);
  vertex(180, 518);
  vertex(180, 560);
  vertex(260, 560);
  vertex(260, 600);
  endShape();
  
//lights under the tree. 
  let z = color(550);
  fill(z);
  rect(0, 518, 180, 5)

fill(z);
rect(180, 560, 80, 5)

//trees on the block.
fill(t);
circle(30, 590, 45)
  
fill(u);
  ellipse(80, 590, 50, 35)

fill(u);
  ellipse(140, 590, 35, 20)
}
  
}