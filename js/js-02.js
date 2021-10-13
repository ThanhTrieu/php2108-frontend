// xu ly ham trong JS
// 1- declare function javascript

function kiemTraChanLe(n) {
    // n : tham so hinh thuc
    // function : tu khoa
    // kiemTraChanLe: ten ham
    // n :  tham so truyen vao ham
    // nam ben trong nay {} : than ham - noi xu ly cac logic
    return n % 2 === 0 ? true : false;
    // return tra ket qua ve cho ham
    // thoat khoi ham - khong thuc thi cac lenh khac ben duoi tu khoa return
}

// su dung ham - goi ten ham ra su dung
let check = kiemTraChanLe(113); // 113 : tham so thuc - that 
if(check){
    console.log(" so chan");
} else {
    console.log("so le");
}

let result = totalNumber(2, 8);
//console.log(result);

function totalNumber(n, m = 3) {
    // m = 3: gan gia tri mac dinh cho tham so hinh thuc
    // gia tri cua tham so hinh thuc ton tai khi ko co gia tri thuc(that) truyen vao ham luc goi ham ra su dung
    // khi ma gan gia tri mac dinh cho tham so hinh thuc, thi thong thuong tham so do se dat o cuoi.
    return n + m;
}

// kiemTraSoNguyenTo(); // sai

// 2 - Anonymous Function
let kiemTraSoNguyenTo = function(n) {
    // so nguyen to la so chia het cho 1 va chinh no
    if(n <= 1){
        return false;
    }
    if (n === 2) {
        return true;
    }
    // kiem tra tu 2 cho den can bac hai cua so can kiem tra
    for(let i = 2; i<= Math.sqrt(n); i++) {
        // dieu kien de dung vong lap - giup viec thuc thi so lan lap la toi uu nhat(so lan thuc hien vong lap nho nhat)
        if(n % i === 0){
            return false; 
        }
    }
    return true;
}
// goi kiemTraSoNguyenTo ra su dung o ben duoi

let m = 9;
if(kiemTraSoNguyenTo(m)){
    console.log('la so nguyen to');
} else {
    console.log('ko phai so nguyen to');
}


// viet ham tinh giai thua
let tinhGiaiThua = function(m) {
    if( m < 0){
        return 0;
    }
    if(m === 0 || m === 1){
        return 1;
    }
    let gt = 1;
    for(let i = 1; i <= m; i++) {
        gt *= i;
    }
    return gt;
}

let res = tinhGiaiThua(5);
console.log(res);

// su khac biet giua declare function va Anonymous Function
// declare function : mh co ther goi ham ra su dung o bat ky dau trong module(file code) cua mh
// Anonymous Function: khi goi ham ra su dung - chung ta phai goi sau khi ham do duoc dinh nghia

// 3 - arrow function
let kiemTraCL = (n) => n % 2 === 0; // da return - short syntax - viet tren 1 dong
let kiemTraCL2 = (n) => {
    return n % 2 === 0;
}