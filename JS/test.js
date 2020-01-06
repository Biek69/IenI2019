function setup() {
  canvas = createCanvas(450,450);
  background('choco');
  canvas.parent('processing');
  //noLoop();
}
function preload() {
choco = loadimage("images/choco.jpg");
toren = loadimage("images/toren.jpg");
}
function draw () {
    background(choco);

}
