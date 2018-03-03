function sin(l){
	val = Math.sin(l * Math.PI/180);
	return val;
}

function cos(l){
	val = Math.cos(l * Math.PI/180);
	return val;
}

function tri(l){
	p = 360; // period
	l = l + 90;
	val = (2 * Math.abs(2 * ((l/p) - Math.floor((l/p) + (1/2)))) - 1);
	return val;
}

function saw(l){
	p = 360;
	val = 2 * ((l/p) - Math.floor((1/2) + (l/p)));
	return val;
}

function squ(l){
	val = Math.sign(Math.sin(l * Math.PI/180));
	return val;
}

function osc(val, amp, freq, delay = 0){
	return amp * Math.sin((val + delay) * freq * Math.PI/180);
}
