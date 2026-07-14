// 11 Create an array of objects from two arrays


let products = ["macbook", "iphone", "ipad", "airpods"];
let price = [180000, 80000, 55000, 20000];
// [
//   {name:"macbook", price:180000},
//   {name:"iphone", price:80000},
//   {name:"ipad", price:55000},
//   {name:"airpods", price:20000}
// ]
let arr=[];
for (let i=0;i<=products.length-1;i++){
  let obj={};
  obj.name=products[i];
  obj.price=price[i];
  arr.push(obj);
}

console.log(arr);