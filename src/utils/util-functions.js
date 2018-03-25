/**
 * Convert Date object to this format (YYYY-MM-DD)
 * @param {Date} date
 * @returns {string} String date (YYYY-MM-DD)
 */
function formatDate(date) {
	const d = new Date(date);
	let month = '' + (d.getMonth() + 1);
	let day = '' + d.getDate();
	const year = d.getFullYear();

	if (month.length < 2) month = `0${month}`;
	if (day.length < 2) day = `0${day}`;

	return [year, month, day].join('-');
}

/**
 * Create a new Date
 * @returns {string} Date object (YYYY-MM-DD)
 */
function today() {
	return new Date().toISOString().slice(0, 10);
}

/**
 * Calculate difference in days between two dates
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {number}
 */
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

/**
 * Calculate number for ProgressBar component
 * @param {string} startDate
 * @param {string} todayDate
 * @param {string} endDate
 * @returns {number} integer number from 1 to 100
 */
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

/**
 * Determine color of ProgressBar component
 * @param {number} int
 * @returns {string}
 */
function calculateColorOfProgressBar(int) {
	if (int > 85) {
		return 'danger';
	} else if (int > 60) {
		return 'warning';
	}
	return 'success';
}

/**
 * Save data in Session Storage
 * @param {string} name - key for data
 * @param {string|number|Array} data - data for storage
 */
function saveSessionSTO(name, data) {
	sessionStorage.setItem(name, JSON.stringify(data));
}

/**
 * Recover data from Session Storage
 * @param {string} name - key for data to recover
 */
function recoverSessionSTO(name) {
	return JSON.parse(sessionStorage.getItem(name));
}

/**
 * Delete all data in Session Storage
 */
function deleteSessionSTO() {
	sessionStorage.clear();
}


module.exports = {
	formatDate,
	today,
	calculateNumberForProgress,
	calculateColorOfProgressBar,
	saveSessionSTO,
	recoverSessionSTO,
	deleteSessionSTO
};
