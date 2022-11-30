
const finishTime = new Date('2023-01-01 00:00');
console.log(finishTime);

const minutes = 1000 * 60;
const hours = minutes * 60;
const days = hours * 24;



setInterval(() => {
    const startTime = new Date();
    console.log(startTime);
    const differenceTime = finishTime - startTime;
    console.log(differenceTime);
    const daysToNewYear = Math.floor(differenceTime / days)
    console.log(daysToNewYear);
    const hoursToNewYear = Math.floor((differenceTime % days) / hours);
    console.log(hoursToNewYear);
    const minutesToNewYear = Math.floor((differenceTime % hours) / minutes);
    console.log(minutesToNewYear);

}, 1000)





//-----



