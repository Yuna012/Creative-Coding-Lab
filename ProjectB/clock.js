function setup() {
    createCanvas(1112, 834);
background(0);
}

let hours, minutes, seconds;

function draw() {
clockFace();
showTime(hour(), minute(), millis());
}

function showTime(hours, minutes, millis){
//hour hand
push();
strokeWeight(7);
stroke(0);
rotate(radians(30 * hours + 0.5*minutes));
line(0, 0, 0, 260);
pop();
//minute hand
push();
strokeWeight(5);
stroke(245, 0, 0);
rotate(radians(6*minutes + 0.0001*millis));
line(0, 0, 0, 310);
pop();
//second hand
push();
strokeWeight(3);
stroke(0, 255, 0);
rotate(radians(6 * 0.001 * millis));
line(0, 0, 0, 350);
pop();
}

function clockFace() {
stroke(0);
ellipse(width/2, height/2, height*.9, height*.9);
translate(width/2, height/2);
rotate(PI);
for (let i = 0; i < 12; i++) {
    strokeWeight(3);
    line(0, 310, 0, 350);
    rotate(radians(30));
}
for (i = 0; i < 60; i++) {
    strokeWeight(2);
    line(0, 330, 0, 350);
    rotate(radians(6));
}
}
