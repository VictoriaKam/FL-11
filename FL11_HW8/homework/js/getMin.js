function getMin() {
    let m = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < m) {
        m = arguments[i];
    } 
}
    return m;
}
getMin(5,2,3);