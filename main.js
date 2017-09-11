var weapon = prompt('Choose your weapon!!!!!!!!\n r for rock\n p for paper\ns for scizzors ')

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

if(weapon === 'r'){

    if(cpuWeapon === 's'){

    	 alert('rock wins');
        }
        else if (cpuWeapon === 'p') {
            alert('paper wins');
        }
}

