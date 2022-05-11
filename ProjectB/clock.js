function setup() {
    createCanvas(600, 600);
background(255);
}

let hours, minutes;
let color = ["#FFF670","#FF8076","#FCB571","#98FF78","#B7C4FC"];

function draw() {
clock();
showTime(hour(), minute());
fill(random(color));
if(mouseIsPressed == true){
    
}
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
ellipse(width/2, height/2, height*.4, height*.4);
translate(width/2, height/2);
rotate(PI);
}
