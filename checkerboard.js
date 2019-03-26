document.addEventListener("DOMContentLoaded", main)
var totalTiles = 16;
boardWidth = 800;
boardHeight = 800;
var row = 0
totalRows = 8
totalColumns = 8
var flip = 0
function main (){

	var canvas = document.getElementById("canvas")
	var ctx = canvas.getContext("2d")
	canvas.height = boardWidth;
	canvas.width = boardHeight;
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
	drawTilesRedo(ctx);

}

function drawTiles (ctx){

	for (i=0; i <= totalTiles; i++){
		
		var x = i * 100;
		
		if (x >= 800) {
			x = (i%8)*100
			row += (i%8) + 100
			console.log("sanity check: MORE THAN 800.  row is now", row)
			console.log("sanity check: MORE THAN 800.  x is now", x)
				
				if (i%2 == 0){
					getRect(ctx,x, 0,row,"#000");
					console.log("draw red")
				} else {
					getRect(ctx,x, 0,row,"#F00");
					console.log("draw black")
				}

		} else {
			console.log("else triggered")
			if (i%2 == 0){
					getRect(ctx,x, 0,row,"#F00");
					console.log("draw red")
				} else {
				getRect(ctx,x, 0,row,"#000");
				console.log("draw black")
				}

		};
		
	}
}

function drawTilesRedo(ctx){
	for (e=0; e < 8; e++){
		console.log("drawTilesRedo:", e)
		if (flip%2 == 0){
			console.log("draw red")
			flip = 1
		} else {
			console.log("draw black")
			flip = 0
		}
		createTilesRow(ctx, e)	
	}
}

function createTilesRow(ctx, row){
	
	for (i=0; i < totalColumns; i++){
		console.log("CreateTile:", i)
		console.log("row:",row)


		if (flip%2 == 0){
			getRect(ctx,(i*100),(row*100),100,"#F00");
			console.log("draw red")
			flip = 1
		} else {
			getRect(ctx,(i*100),(row*100),100,"#000");
			console.log("draw black")
			flip = 0
		}

		
		console.log("draw red")

	}
}
function getRect(ctx,x,y,size,color){
	// var ctx = canvas.getContext("2d")
	//actually draw the rect
	ctx.fillStyle = color
	ctx.fillRect(x,y,size,size,color)

}