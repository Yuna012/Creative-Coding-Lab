/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 32).
  2. adjust line 19 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
  
*/
let dancer;
let colors = ["#442F2F", "#4D3434", "#663333"];



function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);
  // ...except to adjust the dancer's name on the next line:
  dancer = new Chocolate(width/2, height/2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(230);
  //to watch full character, please set the background 255.
  dancer.update();
  dancer.display(); 
  
  
}


// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class Chocolate{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:

  }  
  update(){
    // update properties here to achieve
    // your dancer's desired moves and behaviour

    
  }
  display(){
     let freq = frameCount * 0.05;
    let R = map(sin(freq), -5, 5, -100, 25);
    let L = map(sin(freq), 1, -10, 25, -100);
    let x = width / 2 + R;
  let y = height / 2;

    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);
    
    
    // ******** //
    // ⬇️ draw your dancer here ⬇️
  strokeWeight(5);
    line(x - 192, -50, x - 162, 0);
    line(x - 260, -90, x - 325, 0);
    line(x - 265, 40, x - 265, 70);
    line(x - 220, 40, x - 220, 70);
    
    fill(colors[1]);
    stroke(colors[0]);
    strokeWeight(7);
    rect(R, -90, 90, 140);
    
    strokeWeight(3);
    
    rect(R, -30, 35, 20);
    rect(L, -30, 35, 20);
    
    rect(R, -5, 35, 20);
    rect(L, -5, 35, 20);
    
    rect(R, 20, 35, 20);
    rect(L, 20, 35, 20);

    //chocolate bar in its right hand
    rect(L + 78, -12, 7, 24);
    
    fill(250);
    noStroke();
    ellipse(R + 18, -55, 30, 35);
    ellipse(L + 18, -55, 30, 35);
    
    fill(0);
    stroke(0);
    ellipse(L + 8, -55, 18, 25);
    ellipse(R + 8, -55, 18, 25);  
    
    //wrap of the chocolate bar
    fill(180);
    noStroke();
    rect(L + 78, 0, 8.3, 12);
    
    
    // ⬆️ draw your dancer here ⬆️
    
    
    
    
    // ******** //
    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()
   
    
    
    pop();
  }  
    
  drawReferenceShapes(){
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);                       
    rect(-100, -100, 200, 200);    
    fill(255);
    stroke(0);
  }
}





/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmomize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 

*/