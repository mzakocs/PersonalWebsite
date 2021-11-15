function draw() {
	colorRect(0,0, canvas.width,canvas.height, 'rgb(18,18,18)');
	handleMesh();

	let width = canvasContext.measureText("Time: " + (frameSinceStart/60).toFixed(2)).width;
	drawText('white', '15px Arial', "Time: " + (frameSinceStart/60).toFixed(2), canvas.width/2 - width/2, canvas.height/6);

	width = canvasContext.measureText("Accuracy: " + Math.floor(accuracy * 100) + "%").width;
	drawText('white', '15px Arial', "Accuracy: " +  + Math.floor(accuracy * 100) + "%", canvas.width/2 - width/2, canvas.height/6+15);

	width = canvasContext.measureText("Best Time: " + bestTime.toFixed(2)).width;
	drawText('white', '15px Arial', "Best Time: " + bestTime.toFixed(2), canvas.width/8 - width/2, canvas.height/6+15);
}

function colorRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor) {
	canvasContext.fillStyle = fillColor;
	canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
}

function colorText(showWords, textX,textY, fillColor) {
	canvasContext.fillStyle = fillColor;
	canvasContext.fillText(showWords, textX, textY);
}

function drawText(color, font, words, X, Y){
   canvasContext.fillStyle = color;
   canvasContext.font = font;
   canvasContext.fillText(words, X, Y);
}

function drawLine(x1,y1,x2,y2,width,color){
    canvasContext.lineWidth = width;
    canvasContext.strokeStyle = color;
    canvasContext.beginPath()
    canvasContext.moveTo(x1, y1);
    canvasContext.lineTo(x2, y2);
    canvasContext.stroke();
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.random() * (max - min + 1) + min;
}
