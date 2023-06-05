function setup() {
    createCanvas(400, 400);
    background(150);
  }
  
  function draw() {
  
    background(150);
    
   fill(0, 50, 50);
    noStroke (0)
    circle(104, 170, (30 + sin(frameCount/ 10) * 60));
    triangle(160,132,205,95,224,97)
  
    push();
    translate(100, 100);
    rotate(sin(frameCount / 0.1));
    // rect (10,10,10,10)
    fill(200, 0, 0);
    noStroke(0);
    rect(150, 150, 50, 50);
    pop();
  
    
  }
  