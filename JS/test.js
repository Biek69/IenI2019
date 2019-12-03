 var zwart= 100;
 var diameter= 2;

 function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  background('silver');
  noStroke();
  fill('deepskyblue');
  ellipse(450,450,diameter);
  fill('grey');
  ellipse(0,0,diameter);
  fill('black');
  ellipse(100,zwart,100);
  zwart= constrain(zwart,0,400)
  diameter++;
  zwart++;
}