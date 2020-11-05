const translateWord = require('./translate-word.js');
const encodeWord = require('./encode-word.js');


const words = process.argv.slice(3);
const encoding = words.map(encodeWord);
const translation = words.map(translateWord)
const command = process.argv[2];

switch(command) {
    case 'translate':
        console.log(translation.join(' '));
    case 'encode':
        console.log(encoding.join(' '));
    default:
        console.log('Write translate or encode after node main.js to depict what transformation you want.');  
    }
