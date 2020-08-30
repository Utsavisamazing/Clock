function setup() {
  createCanvas(800,400);
hr= hour();
mn= minute();
sc= second(); 


arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
}

function draw() {
  background(255,255,255);  
  let hr = hour();
text('Current hour:\n' + hr, 5, 50);


let mn = minute();
text('Current minute: \n' + mn, 5, 50);


let sc = second();
text('Current second: \n' + sc, 5, 50);

 drawSprites();
}



