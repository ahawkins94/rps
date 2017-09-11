var weapon = prompt('Choose your weapon!!!!!!!!\n r for rock\n p for paper\ns for scizzors ')

var cpuWeapon = Math.random();

if (cpuWeapon < 0.34) {
	cpuWeapon = 'rock';
} else if (cpuWeapon <= 0.67) {
	cpuWeapon = 'paper';
} else {
	cpuWeapon = 'scizzors';
}

console.log(cpuWeapon)


