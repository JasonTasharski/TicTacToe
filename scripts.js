var thisMove = 0;
var ties = 0;
var playerMove = 0;
var gameOver = false;
var winArray = ['colA','colB','colC','rowA','rowB','rowC','diA','diB'];
var wins = {'colA':0,'colB':0,'colC':0,'rowA':0,'rowB':0,'rowC':0,'diA':0,'diB':0};
window.onload = function(){
var playOn = function(){
	thisMove++;
	playerMove++;
	checkWins();
}
var cliBut = function() {
	if (gameOver != true){
		if (event.target.classList.contains("clicked")){
			document.querySelector("#dialogue").innerText = "That square has already been filled. Try a different one, cheater.";
		} else {
			if ((playerMove % 2) == 0) {
				event.target.innerText = "X";
				for (i=0; i < event.target.classList.length; i++){
					wins[event.target.classList[i]]++;
				}
			} else {
				event.target.innerText = "O";
				for (i=0; i < event.target.classList.length; i++){
					wins[event.target.classList[i]]--;
				}
			}
			event.target.classList.add("clicked");
			playOn();
		}
	}
}
var checkWins = function() {
	if (thisMove === 9) {
		if (ties === 2) {
			document.querySelector("#dialogue").innerText = "Strange game. The only winning move is not to play.";
			newGame();
		} else {
			document.querySelector("#dialogue").innerText = "Draw! New Board!";
			freshBoard();
		}
	} else if (thisMove >= 5) {
		for (i = 0; i < 7; i++) {
			if (wins[winArray[i]] === 3){
				document.querySelector("#dialogue").innerText = "X won!";
				gameOver = true;
			} else if (wins[winArray[i]] === -3) {
				document.querySelector("#dialogue").innerText = "O won!";
				gameOver = true;
			} 
		}	
		checkPlayer();
	} else {
		checkPlayer();		
	}
}
var checkPlayer = function() {
	if (gameOver != true){
		if ((playerMove % 2) == 1) {
			document.querySelector("#dialogue").innerText = "Next move: Player Two: O";
		} else {
			document.querySelector("#dialogue").innerText = "Next move: Player One: X";
		}
	}
}
var freshBoard = function(){
	for (i=0; i<document.querySelectorAll(".square").length; i++){
		document.querySelectorAll(".square")[i].innerText = "_";
		document.querySelectorAll(".square")[i].classList.remove("clicked");
	}
	for (i = 0; i < 7; i++) {
		wins[i] = 0;
	}
	thisMove = 0;
	ties++;
}
var newGame = function(){
	window.location.reload();
}
document.querySelector("#refresh").addEventListener("click", function(){
	newGame();
})
for (i = 0; i < document.querySelectorAll(".square").length; i++){
	document.querySelectorAll(".square")[i].addEventListener("click", function(){
		cliBut();
	})
}
} // end Window.onload