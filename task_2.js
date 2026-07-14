// 2 Copy one object into another

let obj = {
  x: 78,
  y: 99,
  z: 89
};


let obj2 = {
  ...obj
};

obj2.x = 100;

console.log(obj2);
console.log(obj);