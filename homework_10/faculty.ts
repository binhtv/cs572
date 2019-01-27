export class Faculty {
	name: string;
	amount: number;
	constructor(name: string, amount: number) {
		this.name = name;
		this.amount = amount;
	}

	sayHello() {
		console.log(`Hello ${this.name} with number of people is ${this.amount}`);
	}
}