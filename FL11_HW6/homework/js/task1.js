let a1 = +prompt("What's a1?");
let a2 = +prompt("What's a2?");
let b1 = +prompt("What's b1?");
let b2 = +prompt("What's b2?");
let c1 = +prompt("What's c1?");
let c2 = +prompt("What's c2?");
const aver = 2;
if ((a1+b1)/aver===c1 && (a2+b2)/aver===c2) {
    console.log(true);
}else {
    console.log(false);
}