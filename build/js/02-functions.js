"use strict";
const logMsg = (msg) => {
    console.log(msg);
};
const total = (nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total([1, 2, 3, 4]));
//# sourceMappingURL=02-functions.js.map