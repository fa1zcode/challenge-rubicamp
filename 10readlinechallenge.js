function sentenceManipulation(sentence) {

    const vowel = ('AEIOUaeiou')
    let kalimat = sentence.split(' ')
    let berubahJadi = []


    for (i = 0; i < kalimat.length; i++) {
        if (vowel.match((kalimat[i][0]))) {
            berubahJadi.push(kalimat[i])
        } else berubahJadi.push(kalimat[i].slice(1, kalimat[i].length)
            + kalimat[i][0] + 'nyo')


    } return berubahJadi.join(' ')
}





const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tulis kalimatmu disini > '
});

rl.prompt();

rl.on('line', (line) => {
  console.log('hasil konversi :'+sentenceManipulation(line));
  
  rl.prompt();
}).on('close', () => {
  console.log('Good bye!');
  process.exit(0);
});