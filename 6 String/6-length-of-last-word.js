/*
s = "  fly me to  the  moon   "
*/


const lengthOfLastWord = (s) => {
    var l = s.trimEnd().split(" ");
    return l[l.length - 1].length;

    // return s.trimEnd().split(" ").at(-1).length

};



console.log(lengthOfLastWord("  fly me to  the  moon   "));
console.log(lengthOfLastWord("Hello World"));
