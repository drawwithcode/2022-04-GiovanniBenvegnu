
const urlString = window.location.href;
let url = new URL(urlString);

let value = 0;
let cx, cy;
let valueX;
let valueY;



function setup() {
  createCanvas(windowWidth, windowHeight);
  cx = width/2;
  cy = height/2;

  
  
  background(220);
}


function draw() {
  //background(255);
  

  //rotationX, rotationY
  const dx = constrain(rotationY, -2, 2);
  const dy = constrain(rotationX, -2, 2);
  cx += dx;
  cy += dy;
  cx = constrain(cx, 0, width);
  cy = constrain(cy, 0, height);

  //set text and size
  textAlign(CENTER);
  textSize(16);
  text("TOUCH TO CHANGE COLOUR", width/2, height/2);

  push();
  //fill color according to touchstarted()
  fill(valueX, 255 - valueY, 255 - valueX);

  //draw ellipse
  ellipse(cx, cy, 100, 100);
  pop();
}

function touchStarted() {
  valueX = mouseX % 255;
  valueY = mouseY % 255;
}



// request permissions on iOS
function touchEnded(event) {
	if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
		DeviceOrientationEvent.requestPermission()
	}
}

