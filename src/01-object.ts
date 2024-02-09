type Customer = {
  name?: string;
  age: number;
  email?: string;
};

const customer: Customer = {
  name: "Lucas",
  age: 30,
};

const greetCustomer = (customer: Customer) => {
  return `Hello, ${customer.name?.toUpperCase()}`;
};

console.log(greetCustomer(customer));
