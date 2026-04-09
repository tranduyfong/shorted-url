const crypto = require('crypto');
const { encode } = require('./encode.decode');

const hashAndEncode = (url) => {
    const hash = crypto.createHash('md5').update(url).digest('hex');
    console.log(hash);
    const decimal = parseInt(hash.substring(0, 8), 16);
    console.log(decimal);
    return encode(decimal);
}

module.exports = { hashAndEncode };