// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:`
var getElementsByClassName = function(className) {
  var results = [];
  
  function recurse(nodes) {
    var nodeList = nodes.children;
    for(let i = 0; i < nodeList.length; i++){
      if(_.contains(nodeList[i].classList,className)){
        results.push(nodeList[i]);
      }
      if(nodeList[i].children){
        recurse(nodeList[i]);
      }
    }
  }

  recurse(document);
  console.log(results)
  return results;
};
