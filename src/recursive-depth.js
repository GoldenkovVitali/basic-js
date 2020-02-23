module.exports = class DepthCalculator {
calculateDepth(arr, level) {
var level=1
if(arr.some(arrel=>Array.isArray(arrel))) //проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции
{
let arr1 = arr.flat(); //возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень level
return  this.calculateDepth(arr1) + level; // выводит значение функции (this) + 1
}
return level;
}
};