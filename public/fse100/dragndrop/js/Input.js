const KEY_SPACEBAR = 32;

var mouseX;
var mouseY;

var mouseDown = false;

function updateMousePos(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;

  mouseX = evt.clientX - rect.left - root.scrollLeft;
  mouseY = evt.clientY - rect.top - root.scrollTop;
}

function keyPressed(evt){}

function keyReleased(evt){}

function handleMouseDown() {
	mouseDown = true;
}
function handleMouseRelease() {
	mouseDown = false;
	mouse.holdItem = undefined;
}
	
	document.addEventListener('mousemove', updateMousePos);
  document.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mouseup', handleMouseRelease);

	document.addEventListener('keydown', keyPressed)
	document.addEventListener('keyup', keyReleased)