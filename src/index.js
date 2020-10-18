const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result='';
    let preResult=''
    for(let i=0;i<=expr.length-1;i+=10){
    		if(expr[i]=='*') continue; 
        let morseNum = Number(expr.slice(i,i+10)).toString();        
        
        for(let n=0; n<morseNum.length-1; n+=2){
            let str=(morseNum[n]+morseNum[n+1]=='10')? '.':'-';
            preResult += str;   
        }

        result += ((expr[i-1]=='*')? ' ':'') + MORSE_TABLE[preResult];
        preResult='';
    }
return result;
}

module.exports = {
    decode
}