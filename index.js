var Currency = require('./currency');
var request = require('./get_currency');

var ua = 100;
var us = 1000;
//беру значение валюты и сразу преобразую в число, в зависимости от условия
var test = setInterval(function () {
	var usdValue = request.usdValue;
	if(usdValue){
		var us_currency = usdValue;
		var currency = new Currency(us_currency);
		currency.UAtoUS(ua).UStoUA(us);//тут можно менять цифры
		clearInterval(test)
	}
},100)
