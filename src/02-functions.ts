const logMsg = (msg: any): void => {
  console.log(msg);
};

const total = (nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

logMsg(total([1, 2, 3, 4]));
