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





const readline = import('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> '
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});