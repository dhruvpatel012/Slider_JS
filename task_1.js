// 1 Creating an object using an already existing object

let obj1 = {
  x: 10,
  y: 20
};

let obj2 = {
  ...obj1,
  z: 67
};


console.log(obj2);