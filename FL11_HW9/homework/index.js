function getNumbers(string) {
    let n = string.split('');
    let m = [];
    let f = [];
    for(let i=0; i < n.length; i++) {
 m.push(parseInt(n[i]));
} 
    for(let i=0; i < m.length; i++) {
if (Boolean(m[i]) === true) {
        f.push(m[i]);
    } 
}
    return f;
}

function findTypes () {
    let n = {};
    for (let i = 0; i < arguments.length; i++) {
    let key = typeof arguments[i];
    if (n[key]) {
       n[key] +=1;
    } else {
        n[key] = 1;
    }
}
    return n;
}

function executeforEach (array, func) {
    for (let i=0; i < array.length; i++) {
 func(array[i]); 
}
}

function mapArray (array, func) {
    let m = [];
    executeforEach(array, function(el) {
        m.push(func(el));
    });
    return m;
}

function filterArray (array, func) {
    let n = [];
    executeforEach(array, function(el) {
        if (func(el)) {
            n.push(el);
        }
    })
    return n;
} 

function showFormattedDate (d) {
    let locale = 'en-us';
    let year = d.getFullYear();
    let month = d.toLocaleString(locale, { month: 'short' });
    let day = d.getDate();
    let time = `Date: ${month} ${day} ${year}`;
    return time;
}

function canConvertToDate(Datestring) {
    let d = Date.parse(Datestring);
    return isNaN(new Date(d)) === false;
}

function daysBetween (date1, date2) {
    let toSec = 1000;
    let toMin = 60;
    let toHours = 60;
    let toDays = 24;
    let difference = Math.floor(Math.abs(date1.getTime() - date2.getTime()) / (toSec * toMin * toHours * toDays));
    return difference;
}

function getAmountOfAdultPeople (data) {
    let date1 = new Date();   
    let age = [];
    let toYears = 365;
    for (let i=0; i < data.length ; i++) {
        let ageInDays = daysBetween(date1, new Date(data[i][' birthday ']));
        age[i] = Math.floor(ageInDays / toYears);
    }
    let fullAge = 18;
    let count = 0;
    filterArray(age, function(el) {
        if (el > fullAge) {
            count++;
        }
    })  
    return count; 
}

function keys(o) {
    let result = [];
    for (let key in o) {
        if ({}.hasOwnProperty.call(o, key)) {
 result.push(key); 
}
    }
    return result;
}

function values(o) {
    let result = [];
    for (let key in o) {
        if ({}.hasOwnProperty.call(o, key)) {
        result.push(o[key]);
    }
}
    return result;
}