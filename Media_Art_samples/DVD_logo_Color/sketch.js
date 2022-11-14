let x;
let y;


let xspeed;
let yspeed;

let dvd;

let r, g, b;

function preload(){
  dvd = loadImage("dvd_logo_1.png");
}

function setup() {
  createCanvas(800, 600);
  x = 400;
  y = 100;
  xspeed = 10;
  yspeed = 10;
  pickColor();
}

function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}

function draw() {
  background(0);
  // rect(x, y, 80, 60);
  // Draw the DVD logo
  tint(r, g, b);
  image(dvd, x, y, 80, 60);
  
  x = x + xspeed;
  y = y + yspeed;
  
  if (x + 80 == width || x == 0) {
    xspeed = -xspeed;
    pickColor();
  } 
  
  /* else if (x == 0){
    xspeed = xspeed * -1;
  } */
  
   if (y + 60 == height || y == 0) {
    yspeed = -yspeed;
    pickColor();
  }
}