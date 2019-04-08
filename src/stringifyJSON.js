// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // find type of input (array/obj/str)
  if (typeof obj === 'number') {
    return obj.toString();
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'boolean') {
    return obj ? "true" : "false";
  }
  if (typeof obj === 'string') {
    return '"'+ obj +'"';
  }
  if (Array.isArray(obj)) {
    let results = [];
    obj.forEach(function(item) {
      results.push(stringifyJSON(item));
    })
    return '[' + results.join(',') + ']';
  }
  if(typeof obj === "object") {
    let result = [];
    for(let key in obj){
      if (typeof obj[key] === 'function') {
        return '{}';
      }
     let chunk = "";
     chunk = '"' + key.toString() + '":' + stringifyJSON(obj[key]);
     result.push(chunk);
    }
    return '{' + result.join(",") + '}';
  }

  
};
