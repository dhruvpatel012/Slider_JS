// 3. Joining objects together

let obj1 = {
  name: "Chunnu",
  age: 24
};

let obj2 = {
  location: "Delhi",
  salary: 25000
};


let details = { ...obj1, ...obj2 };

console.log(details);