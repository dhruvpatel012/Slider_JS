// 10 Find the products whose ratings are more than 4.2

let apple_pro = [
  { name: "macbook", rating: 4.6, price: 180000 },

  { name: "iphone", rating: 4, price: 80000 },

  { name: "ipad", rating: 4.2, price: 55000 },

  { name: "Airpods", rating: 4.3, price: 20000 },
];

//print the products name whose ratings are more than 4.2
for (let i = 0; i <= apple_pro.length - 1; i++) {
  if (apple_pro[i].rating > 4.2) {
    console.log(apple_pro[i].name);
  }
}