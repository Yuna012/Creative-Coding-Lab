let seq = 0;
let seqTime = 0;
let yoff = 0.0;
let x, y;
let paint;
let xSpd, ySpd;
let dia;
let hours, minutes;
let g;

let counter4 = 0;
let counter7 = 0;
let counter8 = 0;
let counter = 0;

let hue;
let radius;

function preload() {
  g = loadFont('fonts/Font.ttf');
}
function setup() {
  let img = createCanvas(windowWidth, 850);
  x = random(150, 250);
  y = random(200, 250);
  xSpd = random(-2, 2);
  ySpd = random(-2, 2);
  dia = random(80, 130);

  angleMode(DEGREES);
  noFill();
  hue = 150;
  radius = height/1.5;
}
let millis4;
let millis7;
let millis8;
let lastMillis4;
let lastMillis7;
let lastMillis8;
let mainMillis;

function draw() {
  background("rgb(219, 164, 187)");

  mainMillis = millis() % 19000;

  if (counter == 0){
    if (mainMillis<=4000){
      let angle4 = map(mainMillis, 0, 4000, 0, 360);
      push();
      translate(width/2, height/2)
      rotate(-90);
      stroke("#bf0fff");
      strokeWeight(20);
      arc(0, 0, radius, radius, 0, angle4);
      pop();

      if (angle4>=358){
        counter = 1;
      }
    }
    textSize(72);
    textFont(g);
    fill("#BF33FF");
    text("Inhale", width/2-100, height/2);
    noFill();
  }

  if (counter == 1){
    if (mainMillis>4000 && mainMillis<=11000){
      let angle7 = map(mainMillis, 4000, 11000, 0, 360);
      push();
      translate(width/2, height/2)
      rotate(-90);
      stroke("#ff930f");
      strokeWeight(40);
      arc(0, 0, radius, radius, 0, angle7);
      pop();

      if (angle7>=358){
        counter = 2;
      }
    }
    textSize(72);
    textFont(g);
    fill("#FF9359");
    text("Keep", width/2-100, height/2);
    noFill();
  }

  if (counter == 2){
    if (mainMillis>11000 && mainMillis<=19000){
      let angle8 = map(mainMillis, 11000, 19000, 0, 360);
      push();
      translate(width/2, height/2)
      rotate(-90);
      stroke("#0061ff");
      strokeWeight(60);
      arc(0, 0, radius, radius, 0, angle8);
      pop();

      if (angle8>=358){
        counter = 0;
      }
    }
    textSize(72);
    textFont(g);
    fill("#6F61FF");
    text("Exhale", width/2-100, height/2);
    noFill();
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
}