// xu dung js de hien thi noi dung ra ngoai trinh duyet
document.write('<h2> Hello world</h2>');
// hien thi 1 man hinh thong bao
// alert('Hi you');
// comment tren 1 dong
/*
comment
tren nhieu dong
*/
// hien thi thong bao de nhap du lieu
// prompt('vui long nhap ho ten');

// hien thi noi dung o man hinh conso debug cua trinh duyet
// console.log('Hello you');

/******************************** Bien trong JS **************/
// su dung tu khoa va hoac let de khai bao bien
var myName = 'Teo';
let myAge = 20;
// bien khong bat dau bang so - bien khong trung voi cac tu khoa trong lap trinh
// bien phan biet chu hoa - chu thuong
// quy uoc dat ten bien: Camel JS
// chu cai dau tien cua tu dau tien viet thuong, cac chu cai dau tien cua cac tu tiep theo phai viet hoa

// kiem tra kieu du lieu cua bien - co toan tu typeof de kiem tra
console.log(typeof myName);
console.log(typeof(myAge));

let checking = true;
let myEmail; // khi chua gan tri - tu nhan kieu undefined
console.log(typeof checking, typeof myEmail);

// phan biet tu khoa var va let
var myAddress = 'Ha Noi';
var myAddress = 'Ha Nam'; // tu khoa var van cho phep dinh lai bien
console.log(myAddress);

let myWork = 'dev';
//let myWork = 'tester'; // tu khoa let khong cho phep dinh lai bien da ton tai
console.log(myWork);
// tu khoa dc su dung tu phien ban ES6 tro len

// pham vi hoat dong
let x = 10;
// pham vi hoat dong cua tu let - gan voi pham vi ngoac nhon gan nhat bao lay no
if(true){
    let x = 20; // 2 bien khac nhau hoan toan
    if(true){
        let x = 30;
        console.log(x);
    }
    console.log(x);
}
console.log(x);
// pham vi hoat dong tu khoa var - phu thuoc vao ham gan nhat bao lay no bao lay no
// tu khoa var - ton tai con tro this tro vao chinh bien do, con tu khoa let thi ko

// hang so trong js
const PI = 3.14;
// PI = 3.15; // khong duoc phep thay doi gia tri cua hang so
let test = 10/0;
console.log(PI, typeof PI, test, typeof test);

/******* cac bieu thuc dieu kien trong js *********/
// 1
let  n = 10;
if(n < 9) {
    // menh de nay thuc thi va tra ve la true - thi se thuc thi cac menh lenh ben trong
    // neu ko thi ko lam gi ca
    // do something
}

if(n < 8){
    // do something
} else {
    // do something
}

if(n < 8) {
    // do something
} else if (n < 7) {
    // do something
} else if (n < 6) {
    // do something
} else if (n < 5) {
    // do something
} else {
    // do something
}
// abc

let m = 10;
switch(m) {
    case 9:
        // do something
    break;
    case 8:
        // do something
    break;
    case 7:
        // do something
    break;
    case 6:
        // do something
    break;
    default:
        // do something
    break;
}
/// abc

// ++a;
// a++;

// vong lap
// 1- for
for(let i = 1; i <= 10; i++){
    console.log(i);
}
// while
let j = 1;
// kiem tra dieu kien truoc
// 0 - n
while(j < 30) {
    console.log(j); // 1 2 3
    j++; // 1 2 3
}

// do ... while
// kiem tra dieu kien sau
// 1 - n
let k = 1;
do {
    console.log(k); // 1 2 3
    k++; // 1 2 3
} while( k < 20);

let u = 9;
let v = 10;
let f = (++u) - (v++) + (--u) - (--v) + (u--) - (++v); // ?
//        10  -  10   +   9   -  10   +  9    - 11
console.log(f);
// -3
// -3
// -3

// == : so sanh tuong doi - so sanh ve mat gia tri/ ko quan tam kieu du lieu
// nhay cam : sensitive '' == false == 0 / true == 1
// === : so sanh gia tri va kieu du lieu

let checkLogin = false; // boolean
if(checkLogin === ''){ // string
    console.log('OK');
} else {
    console.log('NO');
}

let z1 = 10; // number
let z2 = 'b20'; // string (number string)
let z3 = z1 - z2; //  trong js + con goi la toan tu noi chuoi - ghep chuoi
console.log(z3);
// NaN : not a number : number
// khi ma thuc hien cac phep toan hoc trong js hay luon luon kiem tra kiem du lieu cua no co phai number roi moi xu ly

let v1 = 10;
let v2 = 9;
let v3 = (v1-v2 % 2 === 0) ? v2 : v1;
console.log(v3);

let v4 = null;
if(v1-v2 % 2 === 0){
    v4 = v2;
} else {
    v4 = v1;
}
console.log(v4);


