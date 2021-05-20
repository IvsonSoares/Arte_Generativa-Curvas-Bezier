function draw() {
  // Mouse traker
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
  translate(width/2, height/2);
  let x = Xslider.value();
  let y = Yslider.value();

  // Mouse Coordinates
  let mx = mouseX - width/x;
  let my = mouseY - height/y;
  let pmx = pmouseX - width/ x;
  let pmy = pmouseY - height/ y;
  
  // Perlin Noise
  var x1 = noise(t + 15);
  var x2 = mx * noise(t + 20);
  var x3 = pmx *noise(t + 25);
  var x4 = noise(t + 30);
  var y1 = my *noise(t + 35 );
  var y2 = noise(t + 40 );
  var y3 = noise(t + 45);
  var y4 = pmy *noise(t + 50);
  var z1 = mouseX *noise(t+5);
  var z2 = mouseY *noise(t+6);
  var z3 = pmouseX *noise(t+7);
  var z4 = pmouseY *noise(t+8);
    // Mouse Painting
    if (mouseIsPressed)  {

      //sliders assign
      let degrees = sliderDegrees.value();
      let sym = sliderSym.value();
      let transparency = sliderTransparency.value();
      let s = sliderScale.value();
      let sw = sliderSize.value();
      
      // lines position
      let angle = degrees / sym;
      
      // lines color
      colorMode(RGB, 255, 255, transparency);
      xoff += 0.02;
      let hu = noise(xoff) * 255;
      noFill();
      //stroke(hu, cor, 255, 10);
      r = hexToRgb(colorPicker.value()).r;
      g = hexToRgb(colorPicker.value()).g;
      b = hexToRgb(colorPicker.value()).b;
      stroke(r, g, b, 255);
      //stroke(colorPicker.color(), cor, 255, transparency);
      //mirror effect 
      for (let i = 0; i < sym; i++) {
        rotate(angle);
        strokeWeight(sw);
        noFill();
        bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);
        push();
        scale(s, -1);
        bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);
        pop(); 
       }
      }
   t += perlinNoise.value();
   }
}

function hexToRgb(hex) {   
var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);   
return result ? {     r: parseInt(result[1], 16),     
g: parseInt(result[2], 16),     
b: parseInt(result[3], 16)   } : null; }
