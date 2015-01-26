// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var t = typeof(obj);
  if (t==='function'){return undefined}
  if (obj=== null){return '' + obj}
  if (t ==='undefined'){return undefined}
  if (t === 'boolean'){return '' + obj}
  if (t==='number'){return '' + obj}
  if (t==='string'){return '"' + obj + '"'}
  if (t === 'object'){
    if (Array.isArray(obj)){
        var arr = [];
      	for (var i = 0; i < obj.length; i++){
      	    if (stringifyJSON(obj[i]) === undefined){
      	        arr.push('null');
      	    }else {
      	        arr.push(stringifyJSON(obj[i]));
      	    }
      	}
      	return  '[' + arr + ']';
  	} else {
      var results = '';
      for (var n in obj){
      	if (results !== ''){
      		results += ',';
      	}
        if (stringifyJSON(obj[n]) !== undefined){
              results += '"' + n + '"' + ':' +stringifyJSON(obj[n]);
          }
        }
        return '{'+ results +'}';
  	}
  }
};