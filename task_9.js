// 9 Find the employee whose salary is greater than or equal to 50000

let emp_data = [
  { name: "Aman", age: 45, location: "Banglore", salary: 67000 },

  { name: "Ajay", age: 23, location: "Manali", salary: 28000 },

  { name: "Chunnu", age: 28, location: "Delhi", salary: 78000 },

  { name: "Munnu", age: 18, location: "Goa", salary: 13000 }
];

for (let i = 0; i <= emp_data.length - 1; i++) {

  if (emp_data[i]["salary"] >= 50000) {
    console.log(emp_data[i]["name"], emp_data[i]["salary"]);
  }

}
