let a, b;
let aSpeed, bSpeed;
let dia;

function setup() {
  createCanvas(540, 400);
  setupGif(80);   
  background(250);
  fill(20);
  
  a = 250;
  b = 200;
  aSpeed = random(-5, 5);
  bSpeed = random(-5, 5);
  dia = 3;
}

function draw() {
  beginGif();
  a = a + aSpeed;
  b = b + bSpeed;
  
  if (a < 0 || a > width) {
    aSpeed = aSpeed * -1;
  }
  if (b < 0 || b > height) {
    bSpeed = bSpeed * -1;
  }
  noStroke();
  fill(161, 0, 255);
  circle(a, b, dia);
  
  //Define x - this moves the sphere on the x-axis
  //It uses the modulo operator (%) to wrap when we reach the edge of canvas
  let x = frameCount % width;
  
  let freq = frameCount * 0.06; //Frequency of the noise
  let amp = 400; //Amplitude
  let noiseValue = noise(freq) * amp;
  
  let yNoise = noiseValue;

  (console.log(noiseValue));
  
  let freqR = frameCount * 0.002; //Frequency of the noise
  let freqG = frameCount * 0.004; //Frequency of the noise
  let freqB = frameCount * 0.008; //Frequency of the noise

  let colNoiseR = map(noise(freqR), 0, 1, 0, 255);
  let colNoiseG = map(noise(freqG), 0, 1, 0, 255);
  let colNoiseB = map(noise(freqB), 0, 1, 0, 255);

  fill(colNoiseR, colNoiseG, colNoiseB);
  
  let freqSize = frameCount * 0.008; //Frequency of the noise
  let sizeNoise = map(noise(freqSize), 0, 1, 1, 50);
  ellipse(x, yNoise, sizeNoise);
  
  fill(100);
  ellipse(x+3, yNoise+3, sizeNoise);
  endGif(800);    // this stops recording after 300 times through draw
}
