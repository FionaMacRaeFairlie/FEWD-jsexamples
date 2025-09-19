const multiplyES5 = function(x,y) {
 return x * y;
}
const multiplyES6_1 = (x, y) => { return x * y };
const multiplyES6_2 = (x, y) => x * y;
console.log(`multiplyES5:`, multiplyES5(3,4));
console.log(`multiplyES6_1:`,multiplyES6_1(3,4));
console.log(`multiplyES6_2:`,multiplyES6_2(3,4));


