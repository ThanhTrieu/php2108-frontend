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

function totalNumber(n, m = 3) {
    // m = 3: gan gia tri mac dinh cho tham so hinh thuc
    // gia tri cua tham so hinh thuc ton tai khi ko co gia tri thuc(that) truyen vao ham luc goi ham ra su dung
    // khi ma gan gia tri mac dinh cho tham so hinh thuc, thi thong thuong tham so do se dat o cuoi.
    return n + m;
}
let result = totalNumber(2, 8);
console.log(result);