let tex;

function preload() {
  tex = loadImage("silkTex.jpeg");
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    tex.resize(width, height);
    
    strokeWeight(0.3);
  }

function draw() {
    background("#FFEBCD");
  
    tint(255, 100); //process the image (limit transparency)
    image(tex, 0, 0);
}