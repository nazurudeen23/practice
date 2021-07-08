



const number = [1,12,3,45,6,78,9,890];
let res = number.reduce(getSum,0);


function getSum(total,num) {
  return total+Math.round(num);
}

console.log(res);
