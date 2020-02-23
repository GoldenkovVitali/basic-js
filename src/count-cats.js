module.exports = function countCats(matrix) {
  var matrix = matrix.flat();
  let cat= '^^';
  let catNum=0;
  for (let i=0; i<matrix.length; i++){
  if (matrix [i]==cat) {
  catNum++;
  }
  }
  return catNum;
 };
