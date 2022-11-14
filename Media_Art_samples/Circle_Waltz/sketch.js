let count = 6
let c;
function setup() {
  createCanvas(windowWidth, windowHeight);
  let c = color(255, 204, 0);
}

function draw() {
  background(0, 50);
  angleMode(RADIANS)
  let c = color(175, 100, 220);
  
  noStroke()
  let speed = map(sin(frameCount/100), -1, 1, 0, 1)
  let speedY = map(sin(frameCount/80), -10, 20, 10, 1)
 // let speedZ = map(cos(frameCount/150), 10, 10, 100, 1)
  translate(width/2, height/2)
  
  for(let i=-10; i < 1; i+= 1/count){
    rotate(-5/count);
    push()
    fill(190, 217+(speed*10), 215+(i*8), 70)
    translate(12*TWO_PI*speed, 3*TWO_PI*speedY)
    
    ellipse(0, 0, 10, 10, 30, 50/count, 50/count)
    pop()
  }
}