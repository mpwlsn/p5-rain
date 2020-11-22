var len = 50;
var wid = 10;
var drops = [];

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 100; i++){
    drops[i] = new Drop();
  }
}

function draw() {
  background(220);
  stroke(0);
  for (var i = 0; i < drops.length; i++){
    drops[i].show();
    drops[i].fall();
  }
  
  //line(wid,len,10,10);
}