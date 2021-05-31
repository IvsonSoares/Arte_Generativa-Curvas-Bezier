// video
var canvas;
let cor = 255;
var t = 0;
let xoff = 0;

function centerCanvas() {
  var canvasX = width;
  var canvasY = 0;
  canvas.position(canvasX, canvasY);
}

function setup() {
// Cavas used as an element
  canvas = createCanvas(windowWidth/2, windowHeight, P2D);
  centerCanvas();
  angleMode(DEGREES);
  background(0, 0, 0);

// TESTE VIDEO


//botoes
  salvarButton = createButton('Download');
  salvarButton.mousePressed(saveWhatIsThis);
  salvarButton.position(windowWidth/99, windowHeight/1.04);
  
  apagarButton = createButton('Erase');
  apagarButton.mousePressed(clearCanvas);
  apagarButton.position(windowWidth/17, windowHeight/1.04);

  hsbButton = createButton('HSB');
  hsbButton.mousePressed(modeHSB);
  hsbButton.position(windowWidth/11, windowHeight/1.04);
  
  bAndwButton = createButton('White');
  bAndwButton.mousePressed(BlackAndWhite);
  bAndwButton.position(windowWidth/8.5, windowHeight/1.04);
  
//sliders
  sliderSize = createSlider(0.01, 0.2, 0.05, 0.01);
  sliderSize.position(windowWidth/8, windowHeight/2.25);
  
  sliderSym = createSlider(1, 10, 3, 1);
  sliderSym.position(windowWidth/8, windowHeight/2.05);
  
  sliderScale = createSlider(-5, 5, 1, 0.05);
  sliderScale.position(windowWidth/8, windowHeight/1.85);
  
  sliderDegrees = createSlider(0, 360, 180, 1);
  sliderDegrees.position(windowWidth/8, windowHeight/1.7);
  
  sliderTransparency = createSlider(0, 255, 120, 1);
  sliderTransparency.position(windowWidth/8, windowHeight/1.57);
  
  Yslider = createSlider(0, 10, 1, 1);
  Yslider.position(windowWidth/8, windowHeight/1.45);
  
  Xslider = createSlider(0, 10, 1, 1);
  Xslider.position(windowWidth/8, windowHeight/1.36);
  
  perlinNoise = createSlider(0.0001, 1, 0.005, 0.0001);
  perlinNoise.position(windowWidth/8, windowHeight/1.28);
  
  colorPicker = createColorPicker();
  colorPicker.position(windowWidth/8, windowHeight/1.21);
  
  
}


function windowResized() {
  centerCanvas();
}
