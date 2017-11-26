var playerTurn = true;
var currentBoard = [[2,0,2],
					[0,0,0],
					[2,0,2]];

function cleanGame() {
	$("#player-throw-display").removeClass();
	$("#computer-throw-display").removeClass();
}

function processGame(playerThrow) {
	var computerThrow = determineComputerThrow();

	switch(playerThrow) {
		case 0:
		case "0":
			//throw rock
			$("#player-throw-display").addClass("throw-rock");
			break;
		case 1:
		case "1":
			//throw paper
			$("#player-throw-display").addClass("throw-paper");
			break;
		case 2:
		case "2":
			//throw scissors
			$("#player-throw-display").addClass("throw-scissors");
			break;
		default:
			//the game broke
	}

	switch(cpuThought) {
		case 0:
			//throw rock
			$("#computer-throw-display").addClass("throw-rock");
			break;
		case 1:
			//throw paper
			$("#computer-throw-display").addClass("throw-paper");
			break;
		case 2:
			//throw scissors
			$("#computer-throw-display").addClass("throw-scissors");
			break;
		default:
			//throw rock as a safety fallback
	}

}

function gameAnimation() {
	setTimeout(function() {
		$("#player-throw-display").removeClass();
		$("#computer-throw-display").removeClass();
		$("#player-throw-display").addClass("throw-rock");
		$("#computer-throw-display").addClass("throw-rock");
	}, 1000);
	setTimeout(function() {
		$("#player-throw-display").removeClass();
		$("#computer-throw-display").removeClass();
		$("#player-throw-display").addClass("throw-paper");
		$("#computer-throw-display").addClass("throw-paper");
	}, 1000);
	setTimeout(function() {
		$("#player-throw-display").removeClass();
		$("#computer-throw-display").removeClass();
		$("#player-throw-display").addClass("throw-scissors");
		$("#computer-throw-display").addClass("throw-scissors");
	}, 1000);
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
	cleanGame();

	$(".player-option").on("click", function() {
		//gameAnimation();
		processGame($(this).attr("data-throw"));
	});
}

$(document).ready(function() {
	playerClickHandler();
});