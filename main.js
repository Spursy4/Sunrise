// Drawing Basics

// Setup the canvas and the graphics context
let cnv = document.getElementById("myCanvas")
let ctx = cnv.getContext("2d")
cnv.width = 400;
cnv.height = 400;

// Variables to store images
let cloth = document.getElementById("Cloud")

ctx.fillStyle = "blue"
ctx.fillRect(0, 0, 400, 300)

ctx.fillStyle = "red"
ctx.beginPath();
ctx.arc(200, 300, 15, 0,  180 * Math.PI)
ctx.fill()

ctx.fillStyle = "green"
ctx.fillRect(0,300, 400, 100)

ctx.drawImage(cloth, 140, 120)
ctx.drawImage(cloth, 180, 100)

