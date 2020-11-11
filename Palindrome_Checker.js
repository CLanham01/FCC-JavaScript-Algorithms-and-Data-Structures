//Free code Camp Palindrome checker project
function palindrome(str) {
    var newStr = str.toLowerCase()
        .replace(/[\W\s_]/g, "");
    var strRev = newStr.split("")
        .reverse()
        .join("");
    if (newStr === strRev) {
        return true;
    } else {
        return false;
    }

};

console.log(palindrome("eye"));