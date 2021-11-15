var canvas, canvasContext;
window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	start()

	var framesPerSecond = 60;
	setInterval(draw, 1000/framesPerSecond);
}

function start(){
	frameSinceStart = 0;

	boundaries.push(new Vec(50,50,canvas.width - 50,50));
	boundaries.push(new Vec(canvas.width - 50,50,canvas.width - 50,canvas.height - 50));
	boundaries.push(new Vec(canvas.width - 50,canvas.height - 50,50,canvas.height - 50));
	boundaries.push(new Vec(50,canvas.height - 50,50,50));

	mesh = createMesh(10);

	let amountOfCheckPoints = 6;
	for (var i = 1; i < mesh.length; i++) {
		for(var j = 0; j < amountOfCheckPoints; j++){
			mesh[i].checkPoints.push({x:mesh[i].x1+Math.cos(mesh[i].ang)*mesh[i].len/amountOfCheckPoints*j,
									  y:mesh[i].y1+Math.sin(mesh[i].ang)*mesh[i].len/amountOfCheckPoints*j,
									  r:mesh[i].checkPointR, flag:false});
		}
	}
}