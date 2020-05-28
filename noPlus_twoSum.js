// var getSum = function (a, b) {
//   let aNegative = a < 0;
//   let bNegative = b < 0;

//   let aCount = [];
//   let bCount = [];

//   let aAbsCopy = Math.abs(a);
//   let bAbsCopy = Math.abs(b);

//   let returnVal = null;

//   while (aCount.length !== aAbsCopy) aCount.push("null");
//   while (bCount.length !== bAbsCopy) bCount.push("null");

//   if (aNegative && bNegative) {
//     returnVal = aCount.concat(bCount).length * -1;
//   } else if (aNegative) {
//     if (aCount.length < bCount.length) {
//       while (aCount.length > 0) {
//         aCount.pop();
//         bCount.pop();
//       }
//       returnVal = bCount.length;
//     } else {
//       while (bCount.length > 0) {
//         aCount.pop();
//         bCount.pop();
//       }
//       returnVal = aCount.length * -1;
//     }
//   } else if (bNegative) {
//     if (aCount.length > bCount.length) {
//       while (bCount.length > 0) {
//         aCount.pop();
//         bCount.pop();
//       }
//       returnVal = aCount.length;
//     } else {
//       while (aCount.length > 0) {
//         aCount.pop();
//         bCount.pop();
//       }
//       returnVal = bCount.length * -1;
//     }
//   } else {
//     returnVal = aCount.concat(bCount).length;
//   }

//   if (returnVal == 0) {
//     return 0;
//   } else {
//     return returnVal;
//   }

// };

var getSum = function (a, b) {
  let carry;
  return (a & b)
  while ((a & b) !== 0) {
    carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a ^ b;
};

console.log(getSum(1,1))
console.log(getSum(-1,1))
console.log(getSum(-2,1))
console.log(getSum(-2,-1))
console.log(getSum(0,-1))