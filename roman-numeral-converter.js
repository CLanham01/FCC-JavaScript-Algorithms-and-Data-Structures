function convertToRoman(num) {
    const convertChart = {
        0: { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX' },
        1: { 1: 'X', 2: 'XX', 3: 'XXX', 4: 'VL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC' },
        2: { 1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM' },
        3: { 1: 'M', 2: 'MM', 3: 'MMM' }
    };
    const romRay = [];
    var numRay = num.toString()
        .split("")
        .reverse();

    for (let i = 0; i < numRay.length; i++) {
        romRay.unshift(convertChart[i][numRay[i]]);
    }
    return romRay.join("");
}

console.log(convertToRoman(306));