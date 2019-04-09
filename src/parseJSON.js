// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // if (json[0] === '[' && json[json.length - 1] === ']') {
  //   console.log(json[0].split(''));
  // }
  let result = [];

  if(json[0] === '{' && json[json.length - 1] === '}') {
     var keyValues = json.slice(1, json.length - 1).toString();
    //  console.log(keyValues);
  }

  function parse (pairs) {
    let pairArray = pairs.split(', ');
    // console.log(pairArray)
    let key = '';
    let value = '';
    pairArray.forEach(function(pair) {
  
      let index = pair.indexOf(':')
      key = pair.slice(1, index-1);
      if (pair[index + 1]  === ' ') {
        value = pair.slice(index + 2 );
      }else {
        value = pair.slice(index + 1);
      }
      let chunk = '';
  
      chunk = key + ': ' + parseJSON(value);
      console.log(chunk)
      // if (typeof value === 'string') {
      //  chunk = key + ': ' + parseJSON(value);
      
      // } else {
      //   chunk = key + ': ' + value;
      // }
      result.push(chunk)
    })
  }
  parse(keyValues);
  console.log('{' + result.join(', ') + '}');
  return  '{' + result.join(', ') + '}';

  
};


