/**
 * Complete the code for isWeekend function and return the string "weekend" or"weekday" without using if-statement/ternary.
 */
function isWeekend() {
	const todayDate = new Date();
	const day = todayDate.getDay(); // 0 - 6 (0 is Sunday)
	const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return dayNames[day];
}

console.log(isWeekend());