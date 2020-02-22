
exports.min = function min (array) {
  if(!arguments.length || array.length==0) {
  return 0;
  }
  array.sort(function(a, b){return a - b});
  return array[0];
 }

exports.max = function max (array) {
  if(!arguments.length || array.length==0) {
    return 0;
    }
  array.sort(function(a, b){return a - b});
  return array[array.length-1];
}

exports.avg = function avg (array) {
  if(!arguments.length || array.length==0) {
    return 0;
    }
 let a = 0;
 for(let i = 0; i < array.length; i++){
 a += array[i];
 }
 return a/array.length;
}
