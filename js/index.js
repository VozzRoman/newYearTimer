

class NewYearTimer {

	constructor({ selector, targetData }) {
		this.selector = selector;
		this.targetData = targetData;
	}

	startTime() {
		setInterval(() => {
		this.getTimeDate();
}, 1000)
}
	getTimeDate() {
	const finishTime = new Date(`${this.targetData}`);
	console.log(finishTime);
	const startTime = new Date();
    console.log(startTime);
    const differenceTime = finishTime - startTime;
	console.log(differenceTime);
	this.convertTime(differenceTime);
 
	}

	convertTime(stampTime) {
	const minutes = 1000 * 60;
	const hours = minutes * 60;
	const days = hours * 24;
	const daysToNewYear = Math.floor(stampTime / days)
    console.log(daysToNewYear);
    const hoursToNewYear = Math.floor((stampTime % days) / hours);
    console.log(hoursToNewYear);
    const minutesToNewYear = Math.floor((stampTime % hours) / minutes);
	console.log(minutesToNewYear);
	const secondsToNewYear = Math.floor((stampTime % minutes) / 1000);
	console.log(secondsToNewYear);
	this.insertDataTime(daysToNewYear, hoursToNewYear, minutesToNewYear, secondsToNewYear);
	}

	insertDataTime(days, hours, minutes, seconds) {
const daysRefs = document.querySelector(`${this.selector} [data-value="days"]`);
console.log(daysRefs);
const hoursRefs = document.querySelector(`${this.selector} [data-value="hours"]`);
console.log(hoursRefs);
const minutesRefs = document.querySelector(`${this.selector} [data-value="minutes"]`);
console.log(minutesRefs);
const secondsRefs = document.querySelector(`${this.selector} [data-value="seconds"]`);
	console.log(secondsRefs);
	daysRefs.textContent = days.toString().padStart(2, '0');
	hoursRefs.textContent = hours.toString().padStart(2, '0');
	minutesRefs.textContent = minutes.toString().padStart(2, '0');
	secondsRefs.textContent = seconds.toString().padStart(2, '0');
}

}



const startNy24 = new NewYearTimer({
	selector: '#clock1',
	targetData: '2023-01-01 00:00',
})

startNy24.startTime();


//-----



