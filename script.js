// console.log(-----------------------------ans-1----------------------------)
// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 17 },
//     { name: "Charlie", age: 19 },
//     { name: "David", age: 30 }
// ];

// let result = people.filter((el) => el.age > 18 );
// console.log(result);

// console.log(-----------------------------ans-2----------------------------)
// const products = [
//     { name: "Laptop", category: "Electronics", price: 50000 },
//     { name: "Shoes", category: "Fashion", price: 3000 },
//     { name: "Watch", category: "Fashion", price: 2000 },
//     { name: "Headphones", category: "Electronics", price: 2000 }
// ];

// let result = products.filter((el) => el.category == "Fashion");
// console.log(result);

// console.log(-----------------------------ans-3----------------------------)
// const students = [
//     { name: "Ravi", marks: 45 },
//     { name: "Priya", marks: 85 },
//     { name: "Ankit", marks: 30 },
//     { name: "Neha", marks: 90 }
// ];

// let ans = students.filter((el) => el.marks > 50);
// console.log(ans);

// console.log(-----------------------------ans-4----------------------------)
// const items = [
//     { name: "Book", price: 150 },
//     { name: "Pen", price: 20 },
//     { name: "Notebook", price: 50 },
//     { name: "Bag", price: 500 }
// ];

// let sum = 0;
// let ans = items.forEach((el) => {
//     sum += el.price;
// });
// console.log(sum);

// console.log(-----------------------------ans-5----------------------------)
// const people = [
//     { name: "John", age: 28 },
//     { name: "Jane", age: 34 },
//     { name: "Smith", age: 50 },
//     { name: "Alice", age: 40 }
// ];

// let sum = 0;
// let result = people.forEach((el) => {
//     sum += el.age;
// });
// console.log(sum);

// console.log(-----------------------------ans-6----------------------------)
// const employees = [
//     { name: "Rahul", department: "IT", salary: 50000 },
//     { name: "Sneha", department: "HR", salary: 40000 },
//     { name: "Amit", department: "IT", salary: 60000 },
//     { name: "Priya", department: "HR", salary: 45000 }
// ];

// let sum = 0;
// let totalSalary = employees.forEach((el) => {
//     sum += el.salary;
// })
// console.log(sum);

// console.log(-----------------------------ans-7----------------------------)
// const expenses = [
//     { category: "Food", amount: 200 },
//     { category: "Travel", amount: 500 },
//     { category: "Entertainment", amount: 300 },
//     { category: "Food", amount: 150 }
// ];

// let sum = 0;
// let totalAmount = expenses.forEach((el) => {
//     if(el.category == "Food"){
//         sum += el.amount;
//     }
// })
// console.log(sum);

// console.log(-----------------------------ans-8----------------------------)
// const items = [
//     { name: "TV", category: "Electronics", price: 40000 },
//     { name: "Sofa", category: "Furniture", price: 25000 },
//     { name: "Fridge", category: "Electronics", price: 30000 },
//     { name: "Table", category: "Furniture", price: 15000 }
// ];

// let sum = 0;
// let totalSum = items.forEach((el) => {
//     if(el.category == "Furniture"){
//         sum += el.price;
//     }
// })
// console.log(sum);