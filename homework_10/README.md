# Exercise

Re-write the following code using TypeScript. Try to be as explicit as possible and add Types toeverything you can. When you are done, transpile the TS code to JS code

	function University(name, dept) {
		this.name = name;
		this.dept = dept;
		this.graduation = function(year) { 
			console.log(`Graduating ${this.dept} ${year} students`);
		}
	}
	var mum = new Univeristy("MUM", "Computer Science");
	mum.graduation(2019);