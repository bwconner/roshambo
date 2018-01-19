function cleanGame() {
	$("#player-throw-display").removeClass();
	$("#computer-throw-display").removeClass();
	$(".outcome-display").text();
}

function processGame(playerThrow) {
	var computerThrow = determineComputerThrow();

	switch(playerThrow) {
		case "rock":
			$("#player-throw-display").addClass("throw-rock");
			break;
		case "paper":
			$("#player-throw-display").addClass("throw-paper");
			break;
		case "scissors":
			$("#player-throw-display").addClass("throw-scissors");
			break;
		default:
			//the game broke
	}

	switch(computerThrow) {
		case "rock":
			$("#computer-throw-display").addClass("throw-rock");
			break;
		case "paper":
			$("#computer-throw-display").addClass("throw-paper");
			break;
		case "scissors":
			$("#computer-throw-display").addClass("throw-scissors");
			break;
		default:
			//the game broke
	}

	var playerWin = determineWinner(playerThrow, computerThrow);
	displayGameResults(playerWin);
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
	var cpuThought = (Math.floor(Math.random() * 3));

	switch(cpuThought) {
		case 0:
			return "rock";
			break;
		case 1:
			return "paper";
			break;
		case 2:
			return "scissors";
			break;
		default:
			return "rock";
	}	

}

function determineWinner(playerThrow, computerThrow) {
	if (playerThrow === "rock") {
		if (computerThrow === "rock") {
			return "tie";
		} else if (computerThrow === "paper") {
			return false;
		} else if (computerThrow === "scissors") {
			return true;
		}
	}

	if (playerThrow === "paper") {
		if (computerThrow === "rock") {
			return true;
		} else if (computerThrow === "paper") {
			return "tie";
		} else if (computerThrow === "scissors") {
			return false;
		}
	}

	if (playerThrow === "scissors") {
		if (computerThrow === "rock") {
			return false;
		} else if (computerThrow === "paper") {
			return true;
		} else if (computerThrow === "scissors") {
			return "tie";
		}
	}
}

function displayGameResults(playerWin) {
	if (playerWin === "tie") {
		$(".outcome-display").text("TIE!");
	} else if (playerWin) {
		$(".outcome-display").text("YOU WIN!");
	} else {
		$(".outcome-display").text("YOU LOSE!");
	}
}

function playerClickHandler() {
	$(".player-option").on("click", function() {
		cleanGame();
		//gameAnimation();
		processGame($(this).attr("data-throw"));
	});
}

$(document).ready(function() {
	playerClickHandler();
});