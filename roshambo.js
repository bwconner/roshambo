var playerTurn = true;
var currentBoard = [[2,0,2],
					[0,0,0],
					[2,0,2]];

function beginGame () {
	playerClickHandler();
}

function processGame(playerThrow) {
	var computerThrow = determineComputerThrow();
	
	alert(playerThrow);
	alert(computerThrow);

	switch(playerThrow) {
		case 0:
			//throw rock
			break;
		case 1:
			//throw paper
			break;
		case 2:
			//throw scissors
			break;
		default:
			//the game broke
	}

	switch(cpuThought) {
		case 0:
			//throw rock
			break;
		case 1:
			//throw paper
			break;
		case 2:
			//throw scissors
			break;
		default:
			//throw rock as a safety fallback
	}	


}

function determineComputerThrow() {
	return cpuThought = (Math.floor(Math.random() * 3));

	switch(cpuThought) {
		case 0:
			//throw rock
			break;
		case 1:
			//throw paper
			break;
		case 2:
			//throw scissors
			break;
		default:
			//throw rock as a safety fallback
	}	

}

function playerClickHandler() {
	$(".player-option").on("click", function() {
		processGame($(this).attr("data-throw"));
	});
}

$(document).ready(function() {
	beginGame();
});