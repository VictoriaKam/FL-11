function addOne(x) {
    return x + 1;
}
function pipe(x) {
    for(let i = 1; i < arguments.length; i++) {
        x = arguments[i](x);
    }
    return x;
}
pipe(9, addOne, addOne, addOne);