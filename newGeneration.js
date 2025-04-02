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
console.log(yeni1);
console.log(product1.price);

//?square bracket
console.log(product2["type"]);


//?DESTRUCTURING yöntemi

let {id,brand,price,type} =product1

console.log("ID", id);
console.log("BRAND", brand);
console.log("PRICE", price);
console.log("TYPE", type);

price+=34
console.log(price);
// console.log(product1.price);

let { id:id2, brand:brand2, price:price2, type:type2 } = product2;


console.log(brand2);


//? NESTED DESTR
const insanlar = {
  kisi1: {
    kimlikNo: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
  },
  kisi2: {
    kimlikNo: "44234567890",
    adi: "Canan",
    soyadi: "Can",
    meslek: "Sosyal Gelişim Uzmanı",
    maas: 25000,
  },
};


//? 1 level dest

// const{kisi1,kisi2}=insanlar

// console.log(kisi1.adi);


//? 2 level dest
// const{adi,meslek}=kisi1
// console.log(adi);
// console.log(meslek);
// console.log(kisi1.soyadi);

// let {maas, adi:adi2}=kisi2

// console.log(maas);
// console.log(adi2);

//* 2.yol dest ( iki seviyeli)
const{kisi1:{soyadi,meslek},
kisi2:{adi: adi2, meslek: meslek2},} =insanlar;
console.log(meslek);
console.log(adi2);




