"use strict";
const customer = {
    name: "Lucas",
    age: 30,
};
const greetCustomer = (customer) => {
    var _a;
    return `Hello, ${(_a = customer.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
};
console.log(greetCustomer(customer));
//# sourceMappingURL=01-object.js.map