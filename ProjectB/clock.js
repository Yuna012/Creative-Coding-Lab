let seq = 0;
let seqTime = 0;
let hours, minutes;

function setup() {
    img = createImage(800, 800);
  background(255);
}

function mousePressed() {
    save(img, 'myImage.png');
}
function draw() {
  background(50);
  
    switch (seq) {
    case 0:
      drawIntro();
      break;
    case 1:
      drawScene1();
      break;
    case 2:
      drawScene2();
      break;
    case 3:
      drawScene3();
      break;
    default:
      drawEnding();
      break;
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
}

function proceedSequence() {
  seq++;
  if (seq == 5) {
    // if sequence reached the last phase,
    // we reset the sequence.
    seq = 0;
  }
}
// function updateSequence() {
//   if (seqTime < 100) {
//     seq = 0;
//   } else if (seqTime > 100 && seqTime < 200) {
//     seq = 1;
//   } else if (seqTime > 200 && seqTime < 300) {
//     seq = 2;
//   } else if (seqTime > 300 && seqTime < 400) {
//     seq = 3;
//   } else if (seqTime > 400 && seqTime < 500) {
//     seq = 4;
//   } else {
//     seq = 5;
//   }
//   seqTime++;
// }

function drawIntro() {
//theme tropical
  background("#E80C7A");
  fill("#FFC900");
  stroke("#9BE800");
  strokeWeight(7);
  ellipse(width / 2, height / 2, 300, 300);
}

function drawScene1() {
//modern
  background("#F2A027");
  fill("#E8E8E6");
  stroke("#272F32");
  strokeWeight(2);
  rectMode(CENTER);
  rect(width / 2, height / 2, 220, 200);
}

function drawScene2() {
//vintage
  background("#735236");
  fill("#A69580");
  stroke("#A68263");
  strokeWeight(4);
  ellipse(width / 2, height / 2, 310, 170);
}

function drawScene3() {
//jungle
  background("#99BF60");
  fill("#365902");
  stroke("#022601");
  strokeWeight(8);
  rectMode(CENTER);
  rect(width / 2, height / 2, 200, 200);
}

function drawScene4(){
//cotton candy
  background("#C099F1");
  fill("#BFE3F3");
  stroke("#F5DFB5");
  strokeWeight(3);
  ellipse(width / 2, height / 2, 300, 300);
}

function drawScene5(){
//office
  background("#EEF277");
  fill("#D9D9D9");
  stroke("#262626");
  strokeWeight(14);
  rectMode(CENTER);
  rect(width / 2, height / 2, 230, 230);
}

function drawEnding() {
//nyu
  background("#730DD9");
  fill("#DAC2F2");
  stroke("#340B53");
  strokeWeight(5);
  ellipse(width / 2, height / 2, 250, 300);
}
