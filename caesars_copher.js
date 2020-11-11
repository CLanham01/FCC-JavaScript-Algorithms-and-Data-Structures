function rot13(str) {
    const alphaRay = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
        'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    const arr = [];
    for (let i = 0; i < str.length; i++) {
        let decode = alphaRay.indexOf(str[i]);
        if (decode <= 12 && decode != -1) {
            arr.push(alphaRay[decode + 13]);
        } else if (decode >= 13) {
            arr.push(alphaRay[decode - 13]);
        } else if (decode == -1) {
            arr.push(str[i]);
        }

    }

    return arr.join("");
}

console.log(rot13("SERR PBQR PNZC"));