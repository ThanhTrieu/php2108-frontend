let n1 = prompt('nhap so thu nhat');
// n1 data type: string
// ep ve kieu so nguyen
n1 = Number.parseInt(n1);

let n2 = prompt('nhap so thu hai');
// n2 data type: string
n2 = Number.parseInt(n2);

let sum = n1 + n2; // khong the thuc hien phep cong, ma hieu la phep ghep chuoi
console.log(sum);

let numberString = ' ';
numberString = numberString.trim(); // xoa bo di khoang trang 2 dau cua chuoi
if(!isNaN(numberString) && numberString.length > 0) {
    // length : kiem tra do dai (ki tu) cua chuoi
    console.log('ve mat gia tri thuc su la so');
} else {
    console.log('ve mat gia tri khong phai la so');
}
// trong js : de khai bao chuoi thi co 3 cach
// su dung nhay don
// su dung nhay kep
// su dung `` : tu ES6 moi co - can cac trinh duyet ho tro
let str = `tong 2 so ${n1} va ${n2} la bang ${sum}`;
let str2 = 'tong 2 so ' + n1 + ' va ' + n2 + ' la bang ' + sum;
console.log(str);