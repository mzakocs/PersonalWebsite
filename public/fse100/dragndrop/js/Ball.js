function group(arr){
	this.arr = arr;

	this.allPutAway = function(){
		let numAway = 0;
		for (var i = 0; i < this.arr.length; i++) {
			if(this.arr[i].bin.correct){
				numAway++;
			}
		}

		if(numAway == bins.arr.length){
			let goodGame = "Well Done!";
			let width = canvasContext.measureText(goodGame).width;
			drawText('white', '25px Arial', goodGame, canvas.width/2 - width/2, canvas.height/2);
			setTimeout(start, 1000);
		}
	}
}

function object(x, y, w, h, i, img, name){
	this.orgX = x;
	this.orgY = y;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.i = i;
	this.image = img;
	this.name = name;

	//the bin that the object will be placed in will be another object
	this.bin = undefined;
	this.correct = false;

	this.show = function(color){
		if(this.image == undefined){
			if(this.correct == false){
				colorRect(this.x, this.y, this.w, this.h, color);
			}else{
				colorRect(this.x, this.y, this.w, this.h, 'green');
			}
			canvasContext.strokeRect(this.x, this.y, this.w, this.h, 'black');
			let width = canvasContext.measureText(this.name).width;
			drawText('white', '18px Arial', this.name, this.x + this.w/2 - width/2, this.h/2)
		}else{
			canvasContext.drawImage(this.image, this.x, this.y, this.w, this.h);
		}
	}

	this.isInBin = function(){
		if(Rect_In_Rect(this,this.bin)){
			this.bin.correct = true;
		}else{
			this.bin.correct = false;
		}
	}
}

function Mouse(){
	this.x = mouseX;
	this.y = mouseY;
	this.holdItem = undefined;

	this.holdIsItem = function(arr){
		for (var i = 0; i < arr.length; i++) {
			if(Point_In_Rect({x:mouseX, y:mouseY},arr[i]) == true 
			&& mouseDown == true && this.holdItem == undefined){
				this.holdItem = arr[i];
			}
		}

		if(this.holdItem != undefined){
			this.holdItem.x = mouseX - (this.holdItem.w/2);
			this.holdItem.y = mouseY - (this.holdItem.h/2);
		}
	}
}

function Rect_In_Rect(rect,target){
	if(rect.x + rect.w >= target.x &&
	   rect.x <= target.x + target.w &&
	   rect.y + rect.h >= target.y &&
	   rect.y <= target.y + target.h){
		return true;
	}
	return false;
}

function Point_In_Rect(point,rect){
	if(point.x >= rect.x && point.x <= rect.x + rect.w
	&& point.y >= rect.y && point.y <= rect.y + rect.h){
		return true;
	}
	return false;
}