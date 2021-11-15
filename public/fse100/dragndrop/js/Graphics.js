var population;
var mouse;
var bins;

const image_name_list = [{img:Bottle_Img, name:"Bottle"},
						{img:Car_Img, name:"Car"},
						{img:Cat_Img, name:"Cat"},
						{img:Dog_Img, name:"Dog"},
						{img:Fish_Img, name:"Fish"},
						{img:Skateboard_Img, name:"Skateboard"},
						{img:Umbrella_Img, name:"Umbrella"}];

function drawEverything (){
	colorRect(0, 0, canvas.width, canvas.height, 'rgb(18,18,18)');

	mouse.holdIsItem(population.arr);

	for (var i = 0; i < bins.arr.length; i++) {
		bins.arr[i].show('blue');
	}
	for (var i = 0; i < population.arr.length; i++) {
		population.arr[i].show('blue');
		population.arr[i].isInBin();
	}

	population.allPutAway();
	
}
  function loadImages(){
    Bottle_Img.src = "Images/Bottle.png"
    Car_Img.src = "Images/Car.png"
    Cat_Img.src = "Images/Cat.png"
    Dog_Img.src = "Images/Dog.png"
    Fish_Img.src = "Images/Fish.png"
    Skateboard_Img.src = "Images/Skateboard.png"
    Umbrella_Img.src = "Images/umbrella.png"
  }

  function drawText(color, font, words, X, Y){
    canvasContext.fillStyle = color;
    canvasContext.font = font;
    canvasContext.fillText(words, X, Y);
  }
  
function colorCircle(centerX, centerY, radius, drawColor){
	canvasContext.fillStyle = drawColor;
	canvasContext.beginPath();
	canvasContext.arc(centerX, centerY, radius, 0,Math.PI*2, true);
	canvasContext.fill();	
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}



