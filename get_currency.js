
var request = require('request-promise');
var Event = require('events').EventEmitter;

var emt = new Event;


var options = {
    method: 'GET',
    uri: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3',
    json: true
}

var result, usdValue;


request(options)
    .then(function (response) {
    	return response;
        // Запрос был успешным, используйте объект ответа как хотите
    })
    .then(function(data){
		result = data;
		emt.emit('success');
	})
    .catch(function (err) {
        console.log('это не может быть ошибкой')
    })


emt.on('success', function () {
	console.log(result);
	getCurrencyFromJson();
	module.exports.result = result;
	module.exports.usdValue = usdValue;
})

function getCurrencyFromJson() {
	for(var i = 0; i < result.length; i++){
		if(result[i].ccy === 'USD') {
			usdValue = result[i].buy;
		} 
	}
	return usdValue;
}


module.exports = request;







