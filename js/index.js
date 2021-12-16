function multiply(a, b, c) {
    return a * b * c
}
const res = multiply(5, 6, 1);
console.log(res);


function euroToRub(euro) {
    return euro * 90
}
const rub = euroToRub(50);
console.log(rub, 'рублей');
//console.log(euroToRub(50));

function milesToKm(miles) {
    return miles * 1.60934
}
const km = milesToKm(25);
console.log(km);

var htmlDiv = {
    className: 'column',
    rel: 'main',
    id: 'block',
};
for (var prop in htmlDiv) {
    console.log(htmlDiv[prop]);
}

const person = {
    name: 'Anna',
    surname: 'Dance',
    age: 18,
    greeting() {
        console.log("Hello");
    },
    changeSurname() {
       this.surname = "Naiman";
        console.log(this);
    },
        
};
person.greeting();
person.changeSurname();


let arrNum = [7,9,1,2,3,5,6,7,8,9,4]

function numToTel(num){

arrNum.splice(0, 0, '+');
arrNum.splice(2, 0, '(');
arrNum.splice(6, 0, ')');
arrNum.splice(10, 0, '-');
arrNum.splice(13, 0, '-');
return arrNum.join('');
}

let tel = numToTel(arrNum);

console.log(tel)