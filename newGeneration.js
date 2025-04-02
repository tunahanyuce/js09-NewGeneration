console.log("**** NEW GEN OPERATORS *****");

//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================

const product1={
    id:"12345",
    brand:"Apple",
    type:"smart phone",
    price:30000
}

const product2 = {
  id: "12346",
  brand: "Samsung",
  type: "mobile phone",
  price: 50000,
};
//? . notation ile erişim
console.log(product2.brand);
console.log(product1.type);
let yeni1=product1.price
console.log(yeni1);
yeni1+=10
console.log(product1.price);

//?square bracket
console.log(product2["type"]);





