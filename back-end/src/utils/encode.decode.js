const CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const encode = (num) => {
    let str = "";
    while (num > 0) {
        str = CHARS[num % 62] + str;
        num = Math.floor(num / 62);
    }
    return str || "0";
};

const decode = (str) => {
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        num = num * 62 + CHARS.indexOf(str[i]);
    }
    return num;
};

module.exports = { encode, decode };