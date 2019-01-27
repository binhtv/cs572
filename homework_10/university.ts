import {Faculty} from './faculty';
class University {
	faculties: Faculty[] = [];
	constructor(public name: string, public dept: string){}
	graduation: (year: number) => void = (year) => {
		console.log(`Graduating ${this.dept} ${year} students`);
	}

	addFaculty (faculty: Faculty) {
		this.faculties.push(faculty);
		this.faculties.forEach((fal) => console.log(fal));
	}
}
var mum = new University('MUM', 'Computer Science');
mum.graduation(2019);
mum.addFaculty(new Faculty('Faculty1', 100));