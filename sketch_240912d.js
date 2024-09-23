function setup() {
 createCanvas(window.innerWidth, window.innerHeight);

}


var img;
function preload() {
 img = loadImage("data/jedi.png");
}

function draw() {
 background(255);
 fill(0);
 noStroke();
 rect(width/2 - 200, height/4 + 00, 50, 250);
 rect(width/2 - 230, height/4 + 200, 10, 225);
 
 
 stroke("black");
 strokeWeight(50);
 noFill();
 arc(width / 2 - 250, height /2 + 25, 150, 150, PI *2, PI);

 
 stroke("black");
 strokeWeight(10);
 noFill();
 arc(width / 2 - 150 , height /2 + 200, 150, 150, PI *2, PI); 
 arc(width / 2 - 150 , height /2 - 50, 150, 150, PI, PI * 2);
 
   image(img, mouseX, mouseY, 500,300);
 }
