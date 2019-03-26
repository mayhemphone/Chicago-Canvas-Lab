document.addEventListener("DOMContentLoaded", main)
var totalTiles = 7
function main (){

	var canvas = document.getElementById("canvas")
	var ctx = canvas.getContext("2d")
	canvas.height = "800"
	canvas.width = "800"
	ctx.width = canvas.width
	ctx.height = canvas.height
	

	var box1 = {
			x: 0,
			y: 0,
			width: 100,
			height: 100
				}

		//box style guide
		ctx.fillStyle = "#f00"
		ctx.lineWidth = 0
		//make a box
	drawTiles(ctx);

}

function drawTiles (ctx){

	for (i=0; i <= totalTiles; i++){
		console.log("sanity check")
		var x = i * 100;

		if (i%2 == 0){
			getRect(ctx,x, 0,100,"#F00");
			console.log("draw red")
		} else {
			getRect(ctx,x, 0,100,"#000");
			console.log("draw black")
		}
	}
}

function getRect(ctx,x,y,size,color){
	//actually draw the rect
	ctx.fillStyle = color
	ctx.fillRect(x,y,size,size,color)

}