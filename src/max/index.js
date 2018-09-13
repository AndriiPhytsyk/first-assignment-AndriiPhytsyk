/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  let max = Number.MIN_SAFE_INTEGER;

  arr.forEach(number => {
    if(number > max) max = number;
  });

  return max;
  /* your logic here...*/
};

export default max;
