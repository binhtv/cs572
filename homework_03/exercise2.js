const EventEmitter = require('events');

class Gym extends EventEmitter {
	constructor(message) {
		super();
		setInterval(() => {
			this.emit('boom', message);
		}, 1000);
	}
}

const gym = new Gym('Athlete is working out');
gym.on('boom', msg => console.log(msg));