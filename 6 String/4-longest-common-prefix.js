

const longestCommonPrefix = (data) => {
    var c = ""
    var same = [];
    for (let i = 0; i < data.length; i++) {
        same.push(data[i].charAt(i));
        if (!same.includes(data[i].charAt(i))) {
            return false
        }
        c = c + data[i].charAt(i);
    }

    return c;
}




console.log(longestCommonPrefix(["flower", "flow", "flight"]));