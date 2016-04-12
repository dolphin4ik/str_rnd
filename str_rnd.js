//str_rnd.js

;(function(w){

var _chars = {
	'num': '0123456789',
	'eng': 'abcdefghijklmnopqrstuvwxyz',
	'rus': 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя',
	// 'alt': '☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼'
};

var _randomnumber = function(n){
	return Math.round(Math.random()*(n-1));
}

var _stringrandom = function(leng,dict){

	var result = '';

	var str = function(dictionaries){

		var string = '';

		if(dictionaries){
			for(var d in dictionaries){
				string += _chars[dictionaries[d]];
			}
		}else{
			for(var d in _chars){
				string += _chars[d];
			}
		}
		return string;
	}

	var mergestring = (dict)? str(dict.split(',')) : str(false);

	for (var i = leng - 1; i >= 0; i--) {
		result += mergestring[_randomnumber(mergestring.length)];
	}

    return result;

};

var str_rnd = function(leng,dict){

	return _stringrandom(leng,dict);

};

str_rnd.chars = _chars;

w.str_rnd = str_rnd;


})(window);