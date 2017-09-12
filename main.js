var gameMode = prompt("Choose your game mode:\nm8 = 2 player Rock Paper Scizzors\nCPU = Test your wits against the mighty computer")

while (gameMode === 'm8') {

	if (gameMode === 'm8') {
		rps2P();
	} 

	function rps2P() {

	    var user1 = prompt('Player 1! \nr = Rock \np = Paper\ns = Scizzors');

		if (user1 != 'r' && user1 != 'p' && user1 != 's') {
		alert("That's not an option!!!");
		}

	    var user2 = prompt('Player 2\nr = Rock \np = Paper\ns = Scizzors');

	    if (user2 != 'r' && user2 != 'p' && user2 != 's') {
	    	alert("That's not an option!!!");
	    }


	    if (user1 === user2) {
	        alert('Draw, try again!');
	    }
	    
		if (user1 === 'r') {

		    if (user2 === 's') {

		    	 alert ('Player 1 wins with Rock!');
		        } else if (user2 === 'p') {
		            alert('Player 2 wins with Paper!');
		        }
		}

		if (user1 === 'p') {

		    if (user2 === 'r') {

		    	 alert ('Player 1 wins with Paper!');
		        } else if (user2 === 's') {
		            alert('Player 2 wins with Scizzors!');
		        }
		}

		if (user1 === 's') {

		    if (user2 === 'p') {

		    	 alert ('Player 1 wins with Scizzors!');
		        } else if (user2 === 'r') {
		            alert('Player 2 wins with Rock!');
		        }
		}

	}
}

while (gameMode === 'CPU') {

	if (gameMode === 'CPU') {
		rpsCpu();
	}

	function rpsCpu() {

	   
		var weapon = prompt('Choose your weapon!!!!!!!!\n r = Rock\np = Paper\ns = Scizzors ')

		var cpuWeapon = Math.random();

		if (cpuWeapon < 0.34) {

			cpuWeapon = 'r';

		} else if (cpuWeapon <= 0.67) {

			cpuWeapon = 'p';

		} else {

			cpuWeapon = 's';
		}

		console.log(cpuWeapon)

		if (weapon === cpuWeapon) {

			alert('It is a draw!!')
		}

		if (weapon === 'r') {

		    if (cpuWeapon === 's') {

		    	 alert ('You win! Rock beats Paper');
		        }
		        else if (cpuWeapon === 'p') {

		            alert('CPU chooses Paper... YOU LOSE');
		        }
		}

		if (weapon === 'p') {

		    if(cpuWeapon === 'r') {

		    	 alert('You win! Paper beats Rock');
		        }
		        else if (cpuWeapon === 's') {
		            alert('CPU chooses Scizzors... YOU LOSE');
		        }
		}

		if (weapon === 's') {

		    if (cpuWeapon === 'p') {

		    	 alert('You win! Scizzors beats Paper!');
		        }
		        else if (cpuWeapon === 'p') {
		            alert('CPU chooses Scizzors... YOU LOSE');
		        }
		}

	}
}