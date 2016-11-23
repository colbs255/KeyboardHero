//keyboardHero.js
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var title = document.getElementById("title");
var noteTag = document.getElementById("note");
var timeTag = document.getElementById("time");

var numberSongsDisplayed = 10;
const lineWidth = 2;
var marginSize = .30;

var img = new Image();

var endNow = true;
var song = songsList[0];
var currentNote = 0;
var startTime = 0;
var ellapsedTime = 0;
var currentSelection = 0;
var currentPage = 1;
var startPoint = 0;
var endPoint = numberSongsDisplayed-1;

var difficultyLevels = ["Easy", "Medium", "Hard", "Expert"];

function selectionEventHandler(e) {
    if(e.keyCode == 115 && currentSelection+1 == songsList.length) {
        //do nothing
    } else if(e.keyCode == 115 && currentSelection % numberSongsDisplayed == numberSongsDisplayed-1){
        startPoint+=numberSongsDisplayed;
        currentSelection++;
        if(songsList.length-(startPoint) < numberSongsDisplayed) {
            endPoint = startPoint + (songsList.length-(startPoint+1));
        } else {
            endPoint+=numberSongsDisplayed;
        }
        drawSongs();
    } else if (e.keyCode == 115) {
        currentSelection++;
        drawSongs();
    } else {}
    
    
    if(e.keyCode == 119 && currentSelection == 0) {
        // do nothing
    } else if(e.keyCode == 119 && currentSelection-1 % numberSongsDisplayed == numberSongsDisplayed-1) {
        startPoint-=numberSongsDisplayed;
        currentSelection--;
        if(endPoint % numberSongsDisplayed == numberSongsDisplayed-1) {
            endPoint-=numberSongsDisplayed;

        } else {
            endPoint = startPoint + (numberSongsDisplayed-1);
        }
        drawSongs();
    } else if(e.keyCode == 119) {
        currentSelection--;
        drawSongs();
    } else {}
    
}


function drawSongs() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for(var y = 1; y <= numberSongsDisplayed-1; y++) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, y*(canvas.height/numberSongsDisplayed) - (lineWidth/2), canvas.width, lineWidth);
    }
    
    ctx.fillStyle = "#00cc00";
    ctx.fillRect(canvas.width*(1-marginSize),0, canvas.width*marginSize, canvas.height);
     
    for(var x = startPoint; x <= endPoint; x++) {
        ctx.font = "30px Helvetica";
        if(x == currentSelection ) {
            ctx.fillStyle = "yellow";
        } else {
            ctx.fillStyle = "white";
        }
        ctx.textAlign = "left";
        ctx.fillText(songsList[x].name, 10, (x % numberSongsDisplayed) *(canvas.height/numberSongsDisplayed) + 40);
    }
    
    
    
    img.src = songsList[currentSelection].albumCover;
    
    // image, artist, difficulty
    ctx.drawImage(img, canvas.width*(1-marginSize), 0, canvas.width*marginSize, canvas.width*marginSize);
    ctx.font = "30px Helvetica";
    ctx.fillStyle = "black";
    ctx.fillText(songsList[currentSelection].artist, canvas.width*(1-marginSize) + 5, canvas.width*marginSize + 30);
    
    
    for(var spot = 0; spot <= 3; spot++) {
            ctx.font = "30px Helvetica";
            ctx.fillStyle = "white";
            ctx.fillText(difficultyLevels[spot], canvas.width*(1-marginSize) + 5, canvas.height - (200*((spot+1)/4)));
    }
    
}

function imagePreLoad() {
    var preImage = new Image();
    for(var im = 0; im<=songsList.length-1; im++) {
        preImage.src = songsList[im].albumCover;
    }
}

function startGame() {
    document.removeEventListener("keypress", selectionEventHandler, false);
    ctx.clearRect(0,0,canvas.width, canvas.height);
	var d = new Date();
	startTime = d.getTime();
	endNow = false;
}

function timerFunction() {
	var dt = new Date();
    if (endNow == false) {
    	ellapsedTime = (dt.getTime() - startTime)/1000;
    	title.innerHTML =  ellapsedTime;
    }
    if (ellapsedTime >= song.easyTimes[currentNote]) {
    	noteTag.innerHTML = "Note number: " + song.easyNotes[currentNote];
    	timeTag.innerHTML = "Time note was played: " + song.easyTimes[currentNote];
    	currentNote++;
    }
}

function init() {
    imagePreLoad();
    document.addEventListener("keypress", selectionEventHandler, false);
    drawSongs();
    
}

var myTimer = setInterval(timerFunction, 25);
init();