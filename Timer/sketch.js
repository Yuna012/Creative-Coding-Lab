// Reference1: The Code Train YouTube Video
//Reference2: Professor MOQN's course example
//Reference3: https://p5js.org/ko/examples/color-radial-gradient.html
let phase = 0;
let zoff = 0;
let xoff = 0;
let yoff = 0;
let scale = 1;
  let dia;
  let dim;
  let radius = dim / 2;
let a = 0.0;
let s = 0.0;
let X, Y;
let rnd, clr;
let numOfLines = (70, 100);
let col = ["#f0f8ff","#F2B6DD","#00FFFF","#8a2Be2","#FFF0A5", "#F2E3D5","#ED7B96","#FF00FF","#adff2f","#FF59A4","#D99AA5","#4B0082","#fffacd","#add8e6 "];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
  background("#1D1D1D");
  dia = 100;
  rnd = random(500);
  	X = mouseX;
	Y = mouseY;
}

function draw() {
  background("black");
  let dim;
  let radius = dim / 2;
  let h = random(0, 360);
  dim = width / 2;  
  background(0);
  colorMode(HSB, 360, 100, 100);
  a = a + 0.04;
  s = sin(a) * 2;
  scale(s);
}

function draw() {
  translate(width /2, height /2);
  fill(random(col));
  rotate(frameRate * 2);
  noStroke();
  for (let v = radius; v > 0; --v){
  fill(h, 90, 90);
  h = (h + 1) % 360;
  }
//   for (let x = 0; x <= width; x += dim){
//   fill(h, 90, 90);
//   }
//     for (let i=0; i<numOfLines; i++){
//       beginShape();
//       let n = noise(x*0.001, i*0.01)
//     }
//   translate(width / 2, height / 2);
//   fill(random(col));
//   for (let r = radius; r > 0; --r) {
//   fill(h, 90, 90);
//   h = (h + 1) % 360;
//   }
  beginShape();
  let noiseMax = 4;
  for (let a = 0; a < TWO_PI; a += radians(5)) {
     let xoff = map(cos(a + phase), -0.5, 1, 0.1, noiseMax);
     let yoff = map(sin(a + phase), -1, 0.5, 0.1, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 0.8, 80, height / 3);
    rnd -= 0.005
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  phase += 0.06;
  zoff += 0.012;
  	X+=random(-2,2);
	Y+=random(-2,2);
	if (rnd <= 0) {
		console.log('stop');
		noLoop();
}

// function mouseClicked() {
//   noLoop();
//   if(keyIsDown == true) {
//     loop();
//   }
// }
  function mouseClicked() {
	X = mouseX;
	Y = mouseY;
	noiseMax = random(4);
	rnd = random(500);
	clr = generateRandomColor();
	fill(clr);
	loop();
}
}