var canvas = document.getElementById('character-canvas');
var ctx = canvas.getContext('2d');
var frameRate = 10;

var headLocationX = canvas.width/2;
var headLocationY = 125;
var headWidth = 100;

runCharacterPreview();
setInterval(runCharacterPreview,1000/frameRate);

function runCharacterPreview() {
  ctx.fillStyle = 'lightgrey';
  ctx.fillRect(0,0, canvas.width, canvas.height);

  drawHead();
}

function drawHead() {
  drawHair();

  ctx.fillStyle = currentBuild['skinColor'];
  ctx.beginPath();
  ctx.arc(headLocationX,headLocationY, headWidth/2, 0, 2*Math.PI);
  ctx.fill();

  drawEyes();
  drawMouth();
}

function drawEyes() {
  var eyeWidth = 18;
  var eyeSize = 10;

  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(headLocationX-eyeWidth,headLocationY, eyeSize, 0, 2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(headLocationX+eyeWidth,headLocationY, eyeSize, 0, 2*Math.PI);
  ctx.fill();
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(headLocationX-eyeWidth+eyeSize/4,headLocationY-eyeSize/4, eyeSize/3, 0, 2*Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(headLocationX+eyeWidth+eyeSize/4,headLocationY-eyeSize/4, eyeSize/3, 0, 2*Math.PI);
  ctx.fill();
  ctx.beginPath();
}

function drawMouth() {
  ctx.moveTo(headLocationX-10,headLocationY+25);
  ctx.lineTo(headLocationX+10,headLocationY+25);
  ctx.lineWidth = 3;
  ctx.stroke();
}

function drawHair() {
  ctx.fillStyle = currentBuild['hairColor'];
  ctx.moveTo(headLocationX-headWidth/2, headLocationY);
  ctx.lineTo(headLocationX-headWidth/2, headLocationY-headWidth/2-10);
  ctx.lineTo(headLocationX+headWidth/2, headLocationY-headWidth/2-10);
  ctx.lineTo(headLocationX+headWidth/2, headLocationY);
  ctx.fill();
}
