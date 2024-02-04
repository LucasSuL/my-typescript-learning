"use strict";
var _a;
let myTuple = [1, "josh"];
console.log(myTuple[0].toString());
console.log(myTuple[1].toUpperCase);
let size = "m";
console.log(size);
function calculateTax(income) {
    if (income < 50000) {
        return income * 1.2;
    }
    return income * 1.3;
}
let employee = {
    id: 1,
    name: "Josh",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.3;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
let res = kgToLbs("10kg");
console.log(res);
let msgBox = {
    drag: () => { },
    resize: () => { },
};
function move(direction) {
    console.log(direction);
}
move("up");
function processValue(value) {
    if (value !== null) {
        console.log(value * 2);
    }
    else {
        console.log("value is null");
    }
}
processValue(20);
processValue(null);
function getCustomer(id) {
    if (id === 0)
        return null;
    else
        return { date: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.date) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=basics.js.map