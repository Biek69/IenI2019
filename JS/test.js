function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}
 var x= 0;

function draw() {
 noStroke();
 if(x<=200){
   fill('white');
  }
else{
    fill('yellow');
}
  ellipse(225,225,x);
  x= x+1;
}
