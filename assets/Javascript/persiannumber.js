String.prototype.toFaDigit = function () {
    return this.replace(/\d+/g, function (digit) {
        var ret = "";
        for (var i = 0, len = digit.length; i < len; i++) {
            ret += String.fromCharCode(digit.charCodeAt(i) + 1728);
        }

        return ret;
    });
};
let enNum = document.querySelectorAll('.en')
enNum.forEach(elem=>{

    console.log(elem.innerHTML);
    console.log("before change: ", elem.innerHTML);
    let newNum = elem.innerHTML.toFaDigit();
    console.log("after change: ", newNum);
    elem.innerHTML = newNum;
    console.log('enNum.innerHTML:', elem.innerHTML);
})   
