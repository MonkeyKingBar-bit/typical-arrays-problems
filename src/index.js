exports.min = function min (array) {
    if (!array) return 0;
    let res = Math.min(...array);
    return (!isFinite(res) || isNaN(res)) ? 0 : res;
}

exports.max = function max (array) {
    if (!array) return 0;
    let res = Math.max(...array);
    return (!isFinite(res) || isNaN(res)) ? 0 : res;
}

exports.avg = function avg (array) {
    if ((!array) || (array.length == 0)) return 0;
    let res = 0;
    for (let i = 0; i < array.length; i++) {
        res += array[i];
    }
    return res / array.length;
}
