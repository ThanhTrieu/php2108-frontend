// array trong js
// kieu du lieu: object
// cu phap:
let arrNumber = [1,2,3,4,5,6]; // mang 1 chieu
let arrNumber2 = new Array(1,2,3,4,5,6); // mang 1 chieu

// mang la 1 bien don co the luu tru nhieu gia tri khac tai thoi diem khai bao.
// cac phan tu trong mang khong bat buoc phai cung kieu du lieu voi nhau

// mang nhieu chieu : phan tu trong mang lai la 1 mang con khac
let arrNumber3 = [1,2,3,['a','b','c'],'cam','quyt'];
let arrNumber4 = new Array(1,2,3, Array('e','f','g') ,5,6);

console.log(arrNumber);
console.log(arrNumber2);
console.log(arrNumber3);
console.log(arrNumber4);

// mang se co 2 thanh phan
// thanh phan 1: vi tri cua phan tu nam trong mang(trinh duyet tu dong no danh so va hieu). vi tri se bat dau ti 0
// thanh phan 2: gia tri cua phan tu nam trong mang

// kiem tra so luong phan tu trong mang
let count = arrNumber.length; // so dem - xuat phat tu 1
console.log(count);

// truy cap vao 1 gia tri cua phan tu nam trong mang
// cu phap: nameArray[key];
// nameArray: ten cua mang
// key: vi tri cua phan tu nam trong mang
let numbers = [1,2,3,4,5,['cam','quyt','mit'],6,8,9,10];
// hien thi gia tri 5 trong mang
console.log(numbers[4]);
// hien gia tri "quyt" ra ngoai man hinh console cua trinh duyet
console.log(numbers[5]); // ['cam','quyt','mit']
console.log(numbers[5][1]);  // quyt

let myArrNumbers = [1,2,3,4,5,6,7,8,9];
let lengthEl =  myArrNumbers.length;
// duyet qua tat cac phan tu nam trong mang
// 1- for
for(let i = 0; i < lengthEl; i++){
    console.log(i); // key - vi tri phan tu trong mang
    console.log('*********');
    console.log(myArrNumbers[i]); // value - gia tri phan tu trong mang
}

// 2 - forEach
myArrNumbers.forEach(function(item, key, array) {

    // item: gia tri phan tu
    // key: vi tri cua phan tu
    // array: mang ban dau
    // tham so key va array goi la tham ko bat buoc
    console.log(` value: ${item} - key: ${key}`);
    console.log(array);
});

console.log(`---------------`);
// 3 - for ... of
for( let j of myArrNumbers){
    console.log(`value: ${j}`); // j ??? value
    // console.log(myArrNumbers[j]); // ko dung : vi j khong phai la key
    // duyet nhanh mang va chi quan tam den gia tri cua cac phan tu
    // se khong biet dc vi tri cua cac phan tu trong mang
}

let myArrNumbers2 = [1,2,3,4,5,6,7,8,9];
// kiem tra xem gia tri 6 co nam trong mang ko?
let pos = myArrNumbers2.lastIndexOf(9,30);
console.log(pos); // tra ve vi tri cua phan tu nam trong mang neu tim thay - khong tim thay thi se tra ve  -1

// them phan tu vao cuoi mang - lam thay doi chinh mang ban dau
myArrNumbers2.push(10);
console.log(myArrNumbers2);
// [1,2,3,4,5,6,7,8,9,10];
let childArr = myArrNumbers2.slice(3,6); // tra ve 1 mang moi - khong lam thay doi mang ban dau
console.log(childArr);
console.log(myArrNumbers2);

myArrNumbers2.splice(3,3,100,200,300); // thay doi mang ban dau
console.log(myArrNumbers2);

// kiem tra co phai la mang hay ko ?
if(Array.isArray(myArrNumbers2)){
    console.log('oke');
}
// chuyen mang ve chuoi
let strArr = myArrNumbers2.toString(); // nguyen mau phan tu cach nhau day ','
let strArr2 = myArrNumbers2.join('?'); // cac phan tu cach nhau boi ki tu truyen vao
console.log(strArr);
console.log(strArr2);

// sap xep mang
let randomArr = [6,1,8,9,2,4,7,3,10,99];
// 1 - sap xep theo tang dan
randomArr.sort(function(a,b) {
    return b-a;
});
console.log(randomArr);

// ham find js
let randoms = [6,1,8,9,2,4,7,3,10,99];
// tim kiem phan tu dau tien trong mang chia het cho 3?
let result = randoms.find(item => item % 3 === 0);
console.log(result);

// lay ra tat cac phan tu chan
let result2 = randoms.filter(item => item % 2 === 0);
console.log(result2);

let randoms3 = [6,1,8,9,2,4,7,3,10,99];
// viet ham tim so min va so max trong mang;
function timSoBeNhatvaLonNhat(arr) {
    // ket qua la return ve mot mang chua 2 so do
    // phan tu thu nhat la min - phan tu thu 2 la max
}
// [1,99];
let result3 = timSoBeNhatvaLonNhat(randoms3);
console.log(result3);

let randoms4 = [6,1,8,9,2,4,7,3,10,99];
// viet ham tinh tong cac so nguyen to trong mang ???
// so nguyen to ???
// tinh tong ???
// tach thanh 2 van de can giai quyet
// viet module ham 
// 1 ham kiem tra so nguyen to
// 1 ham di tinh tong


