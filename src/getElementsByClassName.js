// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
   var result = [];
   getElementsByClass = function(nodes){
        if (nodes !== undefined) {
           var classList = nodes.classList;
           if (nodes.length){
               for (var i=0; i<nodes.length; i++){
                   if(nodes[i].classList!==undefined){
                       getElementsByClass(nodes[i]);
                   }
               }
           } else {
               if(classList){
                   if(classList.contains(className)){
                       result.push(nodes);
                   }
                   getElementsByClass(nodes.childNodes);
               }
           }
       }
   };
   getElementsByClass(document.body);
   return result;
}; 
