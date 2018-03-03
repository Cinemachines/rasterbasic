var i,j;

imgmap.setXYr = function(x,y,val){
	if(this.cutedges){
		if((Math.round(x)>=this.width) || (x<0)){
			return;
		}
		if((Math.round(y)>this.height) || (y<0)){
			return;
		}
	}
	i = Math.round(x) + Math.round(y)*this.width;
	j = i*4;

	this.data[j] = val;
}

imgmap.setXYg = function(x,y,val){
	if(this.cutedges){
		if((Math.round(x)>=this.width) || (x<0)){
			return;
		}
		if((Math.round(y)>this.height) || (y<0)){
			return;
		}
	}
	i = Math.round(x) + Math.round(y)*this.width;
	j = i*4;
	this.data[j+1] = val;
}

imgmap.setXYb = function(x,y,val){
	if(this.cutedges){
		if((Math.round(x)>=this.width) || (x<0)){
			return;
		}
		if((Math.round(y)>this.height) || (y<0)){
			return;
		}
	}
	i = Math.round(x) + Math.round(y)*this.width;
	j = i*4;
	this.data[j+2] = val;
}

imgmap.getP = function(j){
//	var j = i*4;
//	return [this.data[j], this.data[j+1], this.data[j+2]];
}

imgmap.getXY = function(x,y){
	if((this.cutedges) && (Math.round(x)>=this.width) || (x<0)){
		return;
	}else if(Math.round(y)>this.height || (y<0)){
		return
	}
	i = Math.round(x) + Math.round(y)*this.width;
	j = i*4;
	return [this.data[j], this.data[j+1], this.data[j+2]];
}

imgmap.resetBitmap = function(red = 0, green = 0, blue = 0){
	for(var y = 0; y < this.height; y++){
		for(var x = 0; x < this.width; x++){
			i = x + y*this.width;
			j = i*4;
			this.data[j] = red;
			this.data[j+1] = green;
			this.data[j+2] = blue;
			this.data[j+3] = 255;
		}
	}
}
