/**
 * @function getSum
 *
 * @param {num} number
 * @returns {number}
 */

export const getSum = (arg1, arg2) => {
  const isValidArg1 = typeof arg1 === "number" && arg1 > 0;
  const isValidArg2 = typeof arg2 === "number" && arg2 > 0;
  if (!isValidArg1 || !isValidArg2) return;
  return arg1 + arg2;
};
