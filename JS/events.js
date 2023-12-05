window.addEventListener('load', () => {
	const start = document.getElementById('start')
    const restart = document.getElementById('restart')
    let game

	function startGame() {
		game = new Game();
		game.start()
	}

	start.addEventListener('click', function () {
		startGame()
	})

	restart.addEventListener('click', function () {
		// startGame()
		location.reload()
	})
     
});







