function telephoneCheck(str) {

    var variFormat = /(1[ ]?)?(\d{3})[ -]?(\d{3})[ -]?(\d{4})|(1)?[ ]?[(](\d{3})[)][ -]?(\d{3})[ -]?(\d{4})/g

    if (str.match(variFormat) !== null) {
        if (str.match(variFormat).toString() === str) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

console.log(telephoneCheck("1 (555) 555-5555"));
