function formatDate(date) {
	const d = new Date(date);
	let month = '' + (d.getMonth() + 1);
	let day = '' + d.getDate();
	const year = d.getFullYear();

	if (month.length < 2) month = `0${month}`;
	if (day.length < 2) day = `0${day}`;

	return [year, month, day].join('-');
}

function today() {
	return new Date().toISOString().slice(0, 10);
}

Date.daysBetween = (startDate, endDate) => {
	// Get 1 day in milliseconds
	const oneDay = 1000 * 60 * 60 * 24;

	// Convert both dates to milliseconds
	const startDateMs = new Date(startDate).getTime();
	const endDateMs = new Date(endDate).getTime();

	// Calculate the difference in milliseconds
	const differenceMs = endDateMs - startDateMs;

	// Convert back to days and return
	return Math.round(differenceMs / oneDay);
};

function calculateNumberForProgress(startDate, todayDate, endDate) {
	const daysFromStartToEndDate = Date.daysBetween(startDate, endDate);
	let daysFromStartDateToToday = Date.daysBetween(startDate, todayDate);

	if (daysFromStartDateToToday <= 0) {
		// this is for avoid multiplier for zero!
		daysFromStartDateToToday = 1;
	}
	let result = (daysFromStartDateToToday * 100) / daysFromStartToEndDate;
	result = Math.round(result);
	// In this point, value of 'result' is equal to & of days passed between start date and today

	if (result <= 0) {
		return 1; // just for beautiful effect on UI
	} else if (result > 100) {
		return 100;
	}
	return result;
}

function calculateColorOfProgressBar(int) {
	if (int > 80) {
		return 'danger';
	} else if (int > 60) {
		return 'warning';
	}
	return 'success';
}

module.exports = {
	formatDate, today, calculateNumberForProgress, calculateColorOfProgressBar
};
