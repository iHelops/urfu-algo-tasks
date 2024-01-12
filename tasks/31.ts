// https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable (seconds: number) {
    let HH = Math.trunc(seconds / 3600);
    let minutes = seconds - HH * 3600;
    let MM = Math.trunc(minutes / 60);
    let SS = minutes - MM * 60;

    return ('00' + HH).slice(-2) + ":" + ('00' + MM).slice(-2) + ":" + ('00' + SS).slice(-2);
}
