// khai bao object
// kieu du lieu : object (array cungx co kieu du lieu la object)
let person = {}; // object rong
console.log(typeof person);

//  thuoc tinh object: mieu ta nhung dac diem tinh chat cua object do
// thong thuong se duoc bieu dien thong qua danh tu hay tinh tu

// phuong thuc(hanh dong): mieu ta hanh dong cua object do
// thong thuong duoc bieu dien thong qua cac dong tu

let cars = {
    name: 'BMW', // property (name: key - 'BMW': value)
    color: 'white',
    weight: 500,
    start: function(place = 'HN') {
        // method cua object (co the goi no la ham)
        // xu ly logic o day
        return `Xe khoi hanh tu ${place}`;
    },
    stop: function(place = 'HCM') {
        return 'Xe se dung o diem ' + place;
    },
    getNameCar: function() {
        console.log(this);
        return this.name; // this chinh la object ban dau, nen mh co the truy cap vao cac thuoc tinh cua chinh object do
    }
}
// truy cap vao thuoc tinh hay phuong thuc cua object
// cu phap 1- : nameObject.keyProperty : nameObject[keyProperty]
// 2 : nameObject.nameMethod
let nameCar = cars.name; // cars['name'];
console.log(nameCar);
console.log(cars.start('Hai Phong'));
console.log(cars.getNameCar());

let cats = {
    name: 'Tom',
    age: 2,
    color: 'black',
    weight: 3
}
console.log('////////////////////');
// duyet object
// for ..in
for(let i in cats) {
    console.log(i); // ??? key cua object
    console.log('********');
    console.log(cats[i]); // truy cap vao value cua object
}
console.log('////////////////////');

const obj = {a: 10, c: 20}; // khai bao hang so
// object khong phai la kieu du dieu nguyen thuy ban dau
obj.b = 30; // bo sung thuoc tinh hay phuong thuc vao object ban dau -  vi kieu du lieu object trong js ko phai la kieu du lieu nguyen thuy ban dau
//obj = 30; // sai
console.log(obj); /// ????

//Destructuring assignment
const {z} = {x: 10, y: 20, z: 30};
console.log(z);
console.log('////////////////////');

// ket hop giua mang va object
// 1 mang thong tin ve cac ban sinh vien khac nhau
// moi 1 ban sinh vien chinh la 1 object
let students = [
    {
        id: 1,
        name: 'Van Teo',
        gender: 1,
        email: 'vanteo@gmail.com',
        address: 'Ha Noi',
        phone: '122132'
    },
    {
        id: 2,
        name: 'Van Ty',
        gender: 1,
        email: 'vanty@gmail.com',
        address: 'Ha Noi',
        phone: '09989980'
    },
    {
        id: 3,
        name: 'Thi A',
        gender: 0,
        email: 'thiA@gmail.com',
        address: 'Hai Duong',
        phone: '09989989'
    },
    {
        id: 4,
        name: 'Thi B',
        gender: 0,
        email: 'thiB@gmail.com',
        address: 'Bac Ninh',
        phone: '09989980877'
    },
    {
        id: 5,
        name: 'Thi c',
        gender: 0,
        email: 'thic@gmail.com',
        address: 'Nam Dinh',
        phone: '099899889'
    }
];
// viet ham lay ra tat ca cac ban sinh vien la Nam ???
function getStudent(infoStudent) {
    // tra ve 1 ket qua la mang - chua toan thong tin cua cac sinh vien nam
    // c1:
    /*
    let info = [];
    for(let i = 0; i < infoStudent.length; i++) {
        if(infoStudent[i]['gender'] === 1){
            // i: key cua array
            // infoStudent[i] ??? object
            info.push(infoStudent[i]);
        }
    }
    return info;
    */
   // c2 
   let info = infoStudent.filter(item => item.gender === 1);
   return info;
}
console.log(getStudent(students));

// hien du lieu ra ngoai trinh duyet
let htmlInfoStudent = `
    <table width="50%" border="1" cellspacing="0" cellpadding="0">
        <thead>
            <tr>
                <th>MSV</th>
                <th>Ho Ten</th>
                <th>Gio tinh</th>
                <th>Email</th>
                <th>Dia chi</th>
                <th>SDT</th>
            </tr>
        </thead>
        <tbody>
            ${students.map(item => (`
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.gender === 1 ? 'Nam' : 'Nu'}</td>
                    <td>${item.email}</td>
                    <td>${item.address}</td>
                    <td>${item.phone}</td>
                </tr>
            `) )}
        </tbody>
    </table>
`;
document.write(htmlInfoStudent);