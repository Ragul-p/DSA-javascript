const strStr = (mainString, subString) => {
    return mainString.indexOf(subString)
}



const strStr2 = (mainString, subString) => {

    const m = mainString.length, n = subString.length

    for (let i = 0; i < m - n; i++) {
        let flag = true;
        for (let j = 0; j < n; j++) {
            if (mainString[i + j] !== subString[j]) {
                flag = false;
                break;
            }
        }

        if (flag) {
            return i;
        }
    }

    return -1;
}

console.log(strStr("oksad", "ok"));


/*
String Methods :  match(), seach(), indexOf(), includes()
*/