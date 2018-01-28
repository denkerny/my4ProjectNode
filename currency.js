/*
var us_currency = 29;

function roundTwoDecimals (amount) {
	return Math.round(amount * 100) / 100;
}

module.exports.UStoUA = function (currency) {
	return roundTwoDecimals(currency * us_currency);
}

module.exports.UAtoUS = function (currency) {
	return roundTwoDecimals(currency / us_currency);
}
*/

var Currency = function (us_currency) {
	this.us_currency = us_currency;
};

Currency.prototype.roundTwoDecimals = function (amount) {
	return Math.round(amount * 100) / 100;
}

Currency.prototype.UStoUA = function (currency) {
	console.log(this.roundTwoDecimals(currency * this.us_currency));
	return this; //для цепочки вызова
}

Currency.prototype.UAtoUS = function (currency) {
	console.log(this.roundTwoDecimals(currency / this.us_currency));
	return this;//для цепочки вызова
}

module.exports = Currency;