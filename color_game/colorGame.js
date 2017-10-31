var numSquares = 6;
var colors = [];
var pickedColor;

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");

init();

function init(){
	//mode buttons.
	setupModeButtons();

	setupSquares();

	reset();
}


resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";

}

function changeColors(color){
	//loop through all the squares and match the colors
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add random colors
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	//return the array
	return arr;
}

function randomColor(){
	//pick 3 random values for rgb
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function setupModeButtons(){
		for(var i = 0; i < modeButtons.length; i++){
			modeButtons[i].addEventListener("click", function(){
				modeButtons[0].classList.remove("difficulty");
				modeButtons[1].classList.remove("difficulty");
				this.classList.add("difficulty");

				this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

				reset();
			});
		}	
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		//Now we need to add click listeners to the squares
		squares[i].addEventListener("click", function(){
			//Find out the color of the clicked square and compare it with our picked color.
			var clickedColor = this.style.backgroundColor;

			//Check if they are the same color or not.
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again";
			}
		});
	}
}







