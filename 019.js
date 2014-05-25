var date = new Date(1901, 0, 1);
var endDate = new Date(2000, 11, 31);
var day = 24 * 60 * 60 * 1000;

console.log('date = ', date);

var count = 0;
while (date < endDate) {
	if (date.getDate() == 1 && date.getDay() == 0) {
		count++;
	}
	date.setTime(date.getTime() + day);
}

console.log('count = ' + count);
