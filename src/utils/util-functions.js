function formatDate(date) {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return [year, month, day].join('-');
}

function today(){
	return new Date().toISOString().slice(0, 10);
}

Date.daysBetween = function (startDate, endDate) {
	//Get 1 day in milliseconds
	const one_day = 1000 * 60 * 60 * 24;

	// Convert both dates to milliseconds
	const startDate_ms = new Date(startDate).getTime();
	const endDate_ms = new Date(endDate).getTime();

	// Calculate the difference in milliseconds
	const difference_ms = endDate_ms - startDate_ms;

	// Convert back to days and return
	return Math.round(difference_ms / one_day);
}

function calculateProgress(startDate, today, endDate) {
	const daysFromStartToEndDate = Date.daysBetween(startDate, endDate);
	const daysFromStartDateToToday = Date.daysBetween(startDate, today);
	const result = (daysFromStartDateToToday * 100) / daysFromStartToEndDate;
	return Math.round(result);
}

function calculateColorOfProgressBar(int){
	if(int > 80 ){
		return 'danger';
	}else if (int > 60){
		return 'warning';
	}else {
		return 'success';
	}
}

module.exports = { formatDate, today, calculateProgress, calculateColorOfProgressBar };