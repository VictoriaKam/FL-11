let a = +prompt("What's a?");
let b = +prompt("What's b?");
let c = +prompt("What's c?");
if (a+b>c && a+c>b && b+c>a) {
    if (a===b && b===c && a===c) {
        console.log('Equivalent triangle');
    }else if (a===b || b===c || a===c) {
        console.log('Isosceles triangle');
    }else {
        console.log('Normal triangle');
    }
}else {
    console.log('Triangle doesn’t exist');
}