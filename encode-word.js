const emojis = require('./emojis.js');


// string-building version
const encodeWord = function (word) {
    let result = '';
    for (const char of word) {
        let found = false;
        for (const emoji of emojis) {
            if (emoji.letter === char.toLowerCase()) {
                found = true;
                result += emoji.symbol;
            }
        } if (found === false) {
            result += char;
        }
    }
    return result;
};
console.log(encodeWord('pl9h'));
module.exports = encodeWord;
