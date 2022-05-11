let seq = 0;
let seqTime = 0;
let yoff = 0.0;
let x, y;
let paint;
let xSpd, ySpd;
let dia;
let hours, minutes;
let a, b, c, d, e, f, g, h;

function preload() {
  a = loadFont("../fonts/Macondo-Regular.ttf");
  b = loadFont('../fonts/Montserrat-Modern.ttf');
  c = loadFont('../fonts/Satisfy-Vintage.ttf');
  d = loadFont('../fonts/Acme-Jungle.ttf');
  e = loadFont('../fonts/DancingScript-CottonCandy.ttf');
  f = loadFont('../fonts/Cinzel-Office.ttf');
  g = loadFont('../fonts/PaytoneOne-NYU.ttf');
  h = loadFont('../fonts/Greek.ttf');
  paint = loadImage('../fonts/coconut-tree.png');
}

function setup() {
  img = createCanvas(600, 600);
  background(255);
  x = random(150, 250);
  y = random(200, 250);
  xSpd = random(-2, 2);
  ySpd = random(-2, 2);
  dia = random(80, 130);
}

function draw() {
  background(50);
  
    switch (seq) {
    case 0:
      drawIntro();
  image(paint, -80, 315, 220, 350);
  beginShape();
  let xoff = 0;
  fill('#7CF0EF');
  noStroke();
  for (let x = 0; x <= width; x += 15) {
    let y = map(noise(xoff, yoff), 0, 1, 480, 580);
    vertex(x, y);
    xoff += 0.05;
  }
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
      break;
    case 1:
      drawScene1();
      break;
    case 2:
      drawScene2();
    textFont(h);
  textSize(30);
  noStroke();
  fill('black');
  text('XII', width / 2.2, 180);
  text('III', 500, 400);
  text('IX', 70, 400);
      break;
    case 3:
      drawScene3();
        noFill();
        stroke('#0D2622');
        strokeWeight(2);
    arc(38, -10, 260, 170, 0, 40, OPEN);
    arc(460, -10, 290, 115, 80, 130, OPEN);
        strokeWeight(4);
    arc(210, -30, 300, 200, 30, 180, OPEN);
        stroke('#025920');
        strokeWeight(5);
    arc(45, -10, 200, 90, 0, 30, OPEN);
    arc(330, -30, 200, 90, 0, 30, OPEN);
    arc(510, -10, 240, 130, 0, 30, OPEN);
        strokeWeight(8);
    arc(240, 10, 360, 220, 50, 330, OPEN);
      break;
      case 4: 
        drawScene4();
        break;
        case 5:
        drawScene5();
        break;
    default:
      drawEnding();
      break;
  }
  x = x + xSpd;

  y = y + ySpd;

  // change the direction
  if (x < 0 || x > width) {
    xSpd = xSpd * -1;
  }
  if (y < 0 || y > height) {
    ySpd = ySpd * -1;
  }
  
  clock();
  showTime(hour(), minute());
}

function showTime(hours, minutes){
//hour
push();
strokeWeight(7);
stroke("#261715");
rotate(radians(30 * hours + 0.5*minutes));
line(0, 0, 0, 80);
pop();
//minute
push();
strokeWeight(5);
stroke("#423204");
rotate(radians(6*minutes));
line(0, 0, 0, 95);
pop();
}

function clock() { 
stroke(0);
  strokeWeight(4);
translate(width/2, height/2);
rotate(PI);
}

function keyPressed() {
  proceedSequence();
  if(key == " ") {
    save(img, 'YourClock.png');
  }

}

function proceedSequence() {
  seq++;
  if (seq == 7) {
    // if sequence reached the last phase,
    // we reset the sequence.
    seq = 0;
  }
}

function drawIntro() {
//theme tropical
  background("#E80C7A");
  fill("#FFC900");
  stroke("#9BE800");
  strokeWeight(7);
  textFont(a);
  textSize(50);
  text('Tropical', width / 2.75, 60);
  ellipse(width / 2, height / 2, 250, 250);
}

function drawScene1() {
//modern
  background("#F2A027");
  fill("#E8E8E6");
  textFont(b);
  textSize(50);
  text('Modern', width / 2.9, 80);
  noFill();
  line(100, 0, 100, 100);
  fill('#FFD528AF');
  noStroke();
  triangle(95, 75, 500, 600, -250, 600);
  fill('#272F32');
  arc(100, 105, 100, 80, PI, TWO_PI);
  fill("#E8E8E6");
  stroke("#272F32");
  strokeWeight(4);
  triangle(120, 420, 300, 150, 480, 420);
}

function drawScene2() {
//vintage
  background("#735236");
  fill("#F0DAC0");
  stroke("#886B52");
  strokeWeight(8);
  textFont(f);
  textSize(50);
  text('Vintage', width / 3.2, 80);
  strokeWeight(10);
  fill("#A69580");
  arc(width / 2, height / 1.52, 360, 400, PI, TWO_PI);
}

function drawScene3() {
//jungle
  background("#99BF60");
  fill("#365902");
  stroke("#022601");
  strokeWeight(8);
  textFont(d);
  textSize(50);
  text('Jungle', width / 2.5, 80);
  rectMode(CENTER);
  rect(width / 2, height / 2, 220, 220);
}

function drawScene4(){
//cotton candy
  background("#C099F1");
  stroke("#F5DFB5");
  strokeWeight(3);
  textFont(e);
  textSize(50);
  text('Cotton Candy', width / 3.25, 100);
  noFill();
  ellipse(x / 3, y, dia);
  fill("#BFE3F3");
  ellipse(width / 2, height / 2, 260, 260);
  noFill();
  ellipse(x + 50, y / 2, 160);
  noFill();
  ellipse(x / 2, y + 100, 30);
}

function drawScene5(){
//office
  background("#EEF277");
  fill("#D9D9D9");
  stroke("#262626");
  strokeWeight(5);
  textFont(f);
  textSize(50);
  text('Office', width / 2.9, 90);
  rectMode(CENTER);
  strokeWeight(7);
  polygon(width / 2, height / 2, 130, 7);
  fill('#99794E');
  noStroke();
  rect(300, 600, 600, 200);
  fill('black');
  rect(520, 500, 5, 15);
  rect(520, 510, 80, 2);
  fill('grey');
  rect(520, 450, 149.8, 89.8);
}

function drawEnding() {
//nyu
  background("#730DD9");
  fill("#DAC2F2");
  stroke("#340B53");
  strokeWeight(5);
  textFont(g);
  textSize(100);
  text('NYU', width / 3.2, 100);
  star(width / 2, height / 2, 100, 180, 5);
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a + 50) * radius2;
    let sy = y + sin(a + 50) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle + 50) * radius1;
    sy = y + sin(a + halfAngle + 50) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}