var canvas;
var canvasContext;

var Bottle_Img = document.createElement("img");
var Car_Img = document.createElement("img");
var Cat_Img = document.createElement("img");
var Dog_Img = document.createElement("img");
var Fish_Img = document.createElement("img");
var Skateboard_Img = document.createElement("img");
var Umbrella_Img = document.createElement("img");


window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	start();

	var framesPerSecond = 90;
	setInterval(update,1000/framesPerSecond);
}

function update(){
	drawEverything();
}

function start(){
	loadImages();

	mouse = new Mouse();

	let objects = new Array(5);
	for (var i = 0; i < objects.length; i++) {
		let x = i*(canvas.width/objects.length) + 5;
		let y = 5;
		let w = (canvas.width/objects.length) - 5
		let h = 100;
			objects[i] = new object(x,y, w,h, i);
	}

	bins = new group(objects)

	objects = new Array(5);
	for (var i = 0; i < objects.length; i++) {
		let x = (canvas.width-100) * Math.random() + 50;
		let y = (canvas.height - bins.arr[0].h - 100) * Math.random() + bins.arr[0].h + 10;
		let w = 100;
		let h = 100;
			objects[i] = new object(x,y, w,h, i);
			objects[i].bin = bins.arr[i];

			let randIndex = Math.floor(Math.random() * image_name_list.length);
			let repeat = true;

			while(repeat){
				repeat = false;
				for (var j = 0; j < i; j++) {
					if(image_name_list[randIndex].img == objects[j].image){
						randIndex = Math.floor(Math.random() * image_name_list.length);
						repeat = true;
					}
				}
			}

			let name = image_name_list[randIndex].name;
			let image = image_name_list[randIndex].img;

			objects[i].image = image;
			objects[i].bin.name = name;
	}

	population = new group(objects);
}

