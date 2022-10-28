function isError(arr) {
  let [left, right] = arr;
  if (left < 1 || right > 400) return 1;
  if (left % 2 == 0) return 1;
  if (left + 1 !== right) return 1;
  return 0;
}
function pageNumSum(num) {
  let ret = 0;
  while (num) {
    ret = ret + (num % 10);
    num = Math.trunc(num / 10);
  }
  return ret;
}
function pageNumMult(num) {
  let ret = 1;
  while (num) {
    ret = ret * (num % 10);
    num = Math.trunc(num / 10);
  }
  return ret;
}
function findMaxValue(arr) {
  let [left, right] = arr;
  const leftSum = pageNumSum(left);
  const rightSum = pageNumSum(right);
  const leftMult = pageNumMult(left);
  const rightMult = pageNumMult(right);
  const maxValue = Math.max(leftSum, leftMult, rightSum, rightMult);
  return maxValue;
}
function problem1(pobi, crong) {
  var answer = 0;
  if (isError(pobi) || isError(crong)) return -1;
  const pobiScore = findMaxValue(pobi);
  const crongScore = findMaxValue(crong);
  if (pobiScore > crongScore) answer = 1;
  if (pobiScore < crongScore) answer = 2;
  return answer;
}
module.exports = problem1;
