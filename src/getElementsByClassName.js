// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:`
var getElementsByClassName = function(className) {
  var results = [];
  
  function recurse(body) {
    for(let i = 0; i < body.length; i++){
      if(_.contains(body[i].classList,className)){
        results.push(body[i]);
      }
      if(body[i].children){
        getElementsByClassName(body[i]);
      }
    }
  }

  recurse(document.body);
  console.log(results)
  return results;
};
