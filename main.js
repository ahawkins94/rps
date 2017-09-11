var gameMode = prompt("Choose your game mode:\nm8 = 2 player Rock Paper Scizzors\nCPU = Test your wits against the mighty computer")

if (gameMode = 'm8') {
	playGame()
}

function playGame()
{
    var user1 = prompt('r = Rock \np = Paper\ns = Scizzors');

	if (user1 != 'r' && user1 != 'p' && user1 != 's') {
	alert("That's not an option!!!");
	}

    var user2 = prompt('r = Rock \np = Paper\ns = Scizzors');

    if (user2 != 'r' && user2 != 'p' && user2 != 's') {
    	alert("That's not an option!!!");
    }


    if (user1 === user2) {
        alert('Draw, try again!');
    }
    
	if (user1 === 'r') {

	    if (user2 === 's') {

	    	 alert ('Rock wins!');
	        }
	        else if (user2 === 'p') {
	            alert('Paper wins!');
	        }
	}

	if (user1 === 'p') {

	    if (user2 === 'r') {

	    	 alert ('Paper wins!');
	        }
	        else if (user2 === 's') {
	            alert('Scizzors win!');
	        }
	}

	if (user1 === 's') {

	    if (user2 === 'p') {

	    	 alert ('Scizzors win!');
	        }
	        else if (user2 === 'r') {
	            alert('Rock wins!');
	        }
	}

}

    
// var weapon = prompt('Choose your weapon!!!!!!!!\n r for rock\n p for paper\ns for scizzors ')

// var cpuWeapon = Math.random();

// if (cpuWeapon < 0.34) {
// 	cpuWeapon = 'r';
// } else if (cpuWeapon <= 0.67) {
// 	cpuWeapon = 'p';
// } else {
// 	cpuWeapon = 's';
// }

// console.log(cpuWeapon)

// if (weapon === cpuWeapon) {

// 	alert('It is a draw!!')
// }

// if (weapon === 'r') {

//     if (cpuWeapon === 's') {

//     	 alert ('rock wins');
//         }
//         else if (cpuWeapon === 'p') {
//             alert('paper wins');
//         }
// }

// if (weapon === 'p') {

//     if(cpuWeapon === 'r') {

//     	 alert('paper wins');
//         }
//         else if (cpuWeapon === 's') {
//             alert('scizzors win');
//         }
// }

// if (weapon === 's') {

//     if (cpuWeapon === 'p') {

//     	 alert('scizzors win');
//         }
//         else if (cpuWeapon === 'p') {
//             alert('rock wins');
//         }
// }