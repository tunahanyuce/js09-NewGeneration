console.log("**** NEW GEN OPERATORS *****");

//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================

const product1 = {
  id: "12345",
  brand: "Apple",
  type: "smart phone",
  price: 30000,
};

const product2 = {
  id: "12346",
  brand: "Samsung",
  type: "mobile phone",
  price: 50000,
};

//? . notation ile erişim
console.log(product2.brand);
console.log(product1.type);

let yeni1 = product1.price;
console.log(yeni1);
yeni1 += 10;
console.log(yeni1);
console.log(product1.price);

//?square bracket
console.log(product2["type"]);

//?DESTRUCTURING yöntemi

let { id, brand, price, type } = product1;

console.log("ID", id);
console.log("BRAND", brand);
console.log("PRICE", price);
console.log("TYPE", type);

price += 34;
console.log(price);
// console.log(product1.price);

let { id: id2, brand: brand2, price: price2, type: type2 } = product2;

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

//*1.yol dest
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

//*2.yol dest (iki seviyeli)

const {
  kisi1: { adi, soyadi, meslek },
  kisi2: { adi: adi2, meslek: meslek2 },
} = insanlar;

console.log(meslek);
console.log(adi2);

//* Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "John",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

console.log("************************");
team.forEach((kisi) => {
  console.log(kisi.name);
  console.log(kisi.surname);
  console.log(kisi.job);
  console.log(kisi.age);
});

console.log("************************");

team.forEach((kisi) => {
  const { name, age, surname, job } = kisi;

  console.log(name);
  console.log(surname);
  console.log(job);
  console.log(age);
});

console.log("************************");
team.forEach(({ name, age, surname, job }) => {
  console.log(name);
  console.log(surname);
  console.log(job);
  console.log(age);
});

//!----  FUNCTIONLARDA DESTRUC. KULLANIMI ----

const objeGoster = function () {
  return {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  };
};

console.log(objeGoster());

let { name, surname, job } = objeGoster();

console.log(job);

//?parametreli fonksiyon

console.log("************************");

const printVeri = (veri) => {
  console.log(veri.id, veri.bilgi, veri.tarih);
};

const printVeriDest = (veri) => {
  const { id, bilgi, tarih } = veri;

  console.log(id, bilgi, tarih);
};

const printVeriHavadaDest = ({ id, bilgi, tarih }) => {
  console.log(id, bilgi, tarih);
};

const data = {
  id: "123456",
  bilgi: "teslim edildi",
  tarih: "2 nisan",
};

printVeri(data);
printVeriDest(data);
printVeriHavadaDest(data);

//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================

const people = ["Muzaffer", "Mehmet", "RAife", "Mustafa", "Özgür"];
const [kisi1, kisi2, kisi3] = people;
console.log(kisi3);

//* ==============================================
//*  REST (...)
//* =============================================
//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini ayri dizi yada objelere kopyalanmasini saglayabilir.

//? ARRAY
const takimlar = ["GS", "FB", "BJK", "TS", "DENİZLİSPOR", "BURSA", "İSTANBUL"];
const [takim1, takim2, takim3, ...anadoluTakimlari] = takimlar;
console.log(anadoluTakimlari);
console.log(takim1);

//?
const person = {
  adi: "ipek",
  soyad: "bilir",
  meslek: "ev hanimi",
  yas: 34,
};
const { ad, soyad, ...geriKalan } = person;
console.log(geriKalan);
console.log(geriKalan.yas);


