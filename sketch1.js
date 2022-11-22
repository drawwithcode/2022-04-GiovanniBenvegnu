
const urlString = window.location.href;
let url = new URL(urlString);

let value = 0;
let cx, cy;
let valueX;
let valueY;
var button;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background("yellow");
}


function draw() {
  //background(255);
  

  //set text and size
  textAlign(CENTER);
  textSize(30);
  text("TOUCH TO START", width/2, height/2);

}

function touchStarted() {
  window.open(`${url}index2.html?count=${frameCount}`, "_self");
}

// request permissions on iOS
function touchEnded(event) {
	if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
		DeviceOrientationEvent.requestPermission()
	}
}

