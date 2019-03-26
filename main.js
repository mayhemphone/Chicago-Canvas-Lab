document.addEventListener("DOMContentLoaded", main)

function main(){
	//find our canvas
	var canvas = document.getElementById("canvas")
	var ctx = canvas.getContext("2d")

	//set some dimensions
	canvas.setAttribute("width", "400")
	canvas.height = "400"

	//give the context some context
	ctx.width = canvas.width
	ctx.height = canvas.height

	var box1 = {
		x: 10,
		y: 10,
		width: 50,
		height: 50,
	}
	//box style guide
	ctx.fillStyle = "#0F0"
	ctx.strokeStyle = "#000" 
	ctx.lineWidth = 5

	//make a box
	ctx.fillRect(box1.x, box1.y, box1.width, box1.height)
	ctx.strokeRect(box1.x, box1.y, box1.width, box1.height)
	canvas.addEventListener("mousemove", function(event){
		// we want event offsetX and event.offsetY
		
		getRect(ctx,event.offsetX, event.offsetY)
	})

	document.getElementById("cleaner").addEventListener("click", function(){
	console.log ("cleaning")
	clearCanvas(ctx);``
})

}

function getRect(ctx,x,y){

	//assign a size
	var size = Math.floor(Math.random() * 100)
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	ctx.fillStyle = `rgb(${r},${g},${b}`
	//assign a size
	// var size = 50


	//actually draw the rect
	ctx.fillRect(x,y,size,size)

}

function clearCanvas(ctx){
	ctx.clearRect(0, 0, ctx.width, ctx.height)
}
