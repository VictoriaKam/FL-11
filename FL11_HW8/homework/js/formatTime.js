function formatTime (n) {
let days = Math.floor(n/1440);
let hours = Math.floor((n - days * 1440) / 60);
let minutes = (n - days * 1440 - hours * 60);
let time = `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`;
return time;
}
formatTime(2506);