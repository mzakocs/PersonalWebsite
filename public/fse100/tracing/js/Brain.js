var boundaries = [];
var mesh;


var accuracy = 0;
var frameSinceStart = 0;
var framesAccurate = 0;
var totalFrames = 0;
var incTime = false;

var bestTime = 0;

function createMesh(len){
	let mesh = [];
	let lineLen = 100;
	let iterationsAllowed = 100;

	let x1 = canvas.width/2;
	let y1 = canvas.height/2;
	let x2 = canvas.width/2;
	let y2 = canvas.height/2;

	let vec = new Vec(x1,y1,x2,y2, 0);
	mesh.push(vec);
	
	for (var i = 1; i < len; i++) {
		let ang = getRandAngFromPrevAng(i, mesh);

		let vector = new Vec(mesh[i-1].x2,mesh[i-1].y2,mesh[i-1].x2+Math.cos(ang)*lineLen, 
												 mesh[i-1].y2+Math.sin(ang)*lineLen, ang, lineLen);

		let intersecting = true;
		let iterations = 0;

		while(intersecting && iterations < iterationsAllowed){
			intersecting = false;

			//checks to see if newly created vector is intersecting with another vec
			for (var j = 0; j < mesh.length; j++) {
				if(j != i){
					if(intersects(vector.x1,vector.y1,vector.x2,vector.y2, mesh[j].x1,mesh[j].y1, mesh[j].x2, mesh[j].y2)){

						ang = getRandAngFromPrevAng(i, mesh);

						vector = new Vec(mesh[i-1].x2,mesh[i-1].y2,mesh[i-1].x2+Math.cos(ang)*lineLen,
														 mesh[i-1].y2+Math.sin(ang)*lineLen, ang,lineLen);

						intersecting = true;
					}
				}
			}

			//checks to see if newly created vector is intersecting with one of the walls
			for (var j = 0; j < boundaries.length; j++) {
				if(intersects(vector.x1,vector.y1,vector.x2,vector.y2, boundaries[j].x1,boundaries[j].y1, boundaries[j].x2, boundaries[j].y2)){
					ang = getRandAngFromPrevAng(i, mesh);

					vector = new Vec(mesh[i-1].x2,mesh[i-1].y2,mesh[i-1].x2+Math.cos(ang)*lineLen, 
													 mesh[i-1].y2+Math.sin(ang)*lineLen, ang, lineLen);

					intersecting = true;
				}
			}

			iterations++;
		}

		if(iterations < iterationsAllowed){
			mesh.push(vector);
		}else{
			break;
		}

	}

	return mesh;
}

function handleMesh(){
	for (var i = 0; i < mesh.length; i++) {
		mesh[i].show('blue');
		mesh[i].drawPoints();
	}

	colorCircle(mesh[0].x1,mesh[0].y1, 10, 'green');
	colorCircle(mesh[mesh.length-1].x2,mesh[mesh.length-1].y2, 10, 'red');

	//if mouse is in start circle
	if(circle_Point(mouseX, mouseY, mesh[0].x1, mesh[0].y1, mesh[0].checkPointR)){
		incTime = true;

		for (var i = 1; i < mesh.length; i++) {
			for (var j = 0; j < mesh[1].checkPoints.length; j++) {
					mesh[i].checkPoints[j].flag = false;
			}
		}
	}

	let allCheckPointsReached = true;

	for (var i = 1; i < mesh.length; i++) {
		for (var j = 0; j < mesh[1].checkPoints.length; j++) {
			if(mesh[i].checkPoints[j].flag == false){
				allCheckPointsReached = false;
			}
		}
	}

	//if mouse is in end circle
	if(circle_Point(mouseX, mouseY, mesh[mesh.length-1].x2, mesh[mesh.length-1].y2, mesh[mesh.length-1].checkPointR) && allCheckPointsReached){
		incTime = false;

		if(frameSinceStart/60 < bestTime || bestTime == 0){ bestTime = frameSinceStart/60}
		setTimeout(start, 2000);
	}


	let incAcc = false;
	for (var i = 1; i < mesh.length; i++) {
		for (var j = 0; j < mesh[1].checkPoints.length; j++) {
			if(circle_Point(mouseX, mouseY, mesh[i].checkPoints[j].x, mesh[i].checkPoints[j].y, mesh[0].checkPointR) && incTime){
				mesh[i].checkPoints[j].flag = true;
				incAcc = true;
			}
		}
	}

	if(incTime){ frameSinceStart++; totalFrames++;}
	if(incAcc){ framesAccurate++; }

	if(frameSinceStart > 0){ accuracy = framesAccurate / totalFrames };

}

function Vec(x1,y1,x2,y2, ang,len){
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.len = len;
	this.ang = ang;

	this.checkPoints = [];
	this.checkPointR = 10;

	this.drawPoints = function(){
		for(var i = 0;i < this.checkPoints.length;i++){
			if(this.checkPoints[i].flag == false){
				colorCircle(this.checkPoints[i].x,this.checkPoints[i].y, this.checkPointR, 'rgba(0,0,255,0.4)');
			}else{
				colorCircle(this.checkPoints[i].x,this.checkPoints[i].y, this.checkPointR, 'rgba(0,255,0,0.4)');
			}
		}
	}

	this.show = function(color){
		drawLine(this.x1,this.y1,this.x2,this.y2,4,color)
	}
}

function getRandAngFromPrevAng(i, arr){
	let min;
	let max;

	if((arr[i-1].ang - Math.PI/16) >= (arr[i-1].ang + Math.PI/16)){
		max = arr[i-1].ang - Math.PI/2;
		min = arr[i-1].ang + Math.PI/2;
	}else{
		min = arr[i-1].ang - Math.PI/2;
		max = arr[i-1].ang + Math.PI/2;
	}

	let ang = randomIntFromInterval(min, max);

	return ang;

}
// returns true if the line from (a,b)->(c,d) intersects with (p,q)->(r,s)
function intersects(a,b,c,d, p,q,r,s) {
  var det, gamma, lambda;
  det = (c - a) * (s - q) - (r - p) * (d - b);
  if (det === 0) {
    return false;
  } else {
    lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
    gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
    return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
  }
}

function circle_Point(a, b, x, y, r) {
    var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    r *= r;
    if (dist_points < r) {
        return true;
    }
    return false;
}
