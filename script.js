const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

function handleCellClick(event) {
	const clickedCell = event.target;
	const clickedCellIndex = Array.from(cells).indexOf(clickedCell);
	if (gameState[clickedCellIndex] !== '' || checkForWin()) {
		return;
	}
	gameState[clickedCellIndex] = currentPlayer;
	clickedCell.innerText = currentPlayer;
	if (checkForWin()) {
		alert(`${currentPlayer} wins!`);
	} else if (gameState.every(cell => cell !== '')) {
		alert('Tie game!');
	} else {
		currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
	}
}

function checkForWin() {
	const winningConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	return winningConditions.some(condition => {
		const [a, b, c] = condition;
		return gameState[a] !== '' && gameState[a] === gameState[b] && gameState[b] === gameState[c];
	});
}

cells.forEach(cell => {
	cell.addEventListener('click', handleCellClick);
});