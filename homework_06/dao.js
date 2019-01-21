const fs = require('fs');
const path = require('path');
const DATA_FILE = path.join(__dirname, 'grades.json');

function read(id) {
	try {
		let grades = JSON.parse(fs.readFileSync(DATA_FILE, {
			encoding: 'utf8'
		}));
		if (id) {
			const found = grades.filter(grade => grade.id === id);
			return found.length > 0 ? found[0] : null;
		}
		return grades;
	} catch (err) {
		console.log(err);
		return false;
	}
}

function write(grade) {
	try {
		let grades = JSON.parse(fs.readFileSync(DATA_FILE, {
			encoding: 'utf8'
		}));
		if(!grades) {
			grades = [];
		}
		const nextId = Math.max(grades.map(grade => grade.id)) + 1;
		grade.id = nextId;
		grades.push(grade);
		console.log(grades);
		fs.writeFileSync(DATA_FILE, JSON.stringify(grades), {
			encoding: 'utf8'
		});
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}

function update(grade) {
	try {
		let grades = JSON.parse(fs.readFileSync(DATA_FILE, {
			encoding: 'utf8'
		}));
		if(!grades) {//Empty grades
			return false;
		}
		const found = grades.filter(grade => grade.id === grade.id).length > 0;
		if(!found) {//Not found
			return false;
		}

		const newGrades = grades.map(g => {
			if(g.id === grade.id) {
				g = {
					...g,
					...grade
				}
			}
			return g;
		})
		fs.writeFileSync(DATA_FILE, JSON.stringify(newGrades), {
			encoding: 'utf8'
		});
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}

function deleteGrade(id) {
	try {
		let grades = JSON.parse(fs.readFileSync(DATA_FILE, {
			encoding: 'utf8'
		}));
		if(!grades) {//Empty grades
			return false;
		}
		const newGrades = grades.filter(grade => grade.id !== id);
		fs.writeFileSync(DATA_FILE, JSON.stringify(newGrades), {
			encoding: 'utf8'
		});
		return true;
	} catch(err) {
		console.log(err);
		return false;
	}
}

module.exports = {
	read,
	write,
	update,
	delete: deleteGrade
}