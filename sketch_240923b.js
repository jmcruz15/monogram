function setup() {
 createCanvas(window.innerWidth, window.innerHeight);
 background(255,182,193);
 frameRate(25);
}


var img;
function preload() {
 img = loadImage("data/jedi.png");
 
}

function draw() {
 fill(255);
 noStroke();
 rect(width/2 - 200, height/4 + 00, 50, 250);
 rect(width/2 - 230, height/4 + 200, 10, 225);
 
 
 stroke(255);
 strokeWeight(50);
 noFill();
 arc(width / 2 - 250, height /2 + 25, 150, 150, PI *2, PI);

 
 stroke(255);
 strokeWeight(10);
 noFill();
 arc(width / 2 - 150 , height /2 + 200, 150, 150, PI *2, PI); 
 arc(width / 2 - 150 , height /2 - 50, 150, 150, PI, PI * 2);
 
   image(img, mouseX, mouseY, 500,300);
 }
