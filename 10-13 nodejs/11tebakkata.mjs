import readline from 'readline';
import fs from 'fs'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan: '
});
console.log('Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!')



var soal = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
//console.log(soal)
let index = 0
console.log(`Pertanyaan: ${soal[index].definition}`)


rl.prompt();

rl.on('line', (answer) => {
    //console.log(answer);
    if (answer == soal[index].term) {
        console.log('Selamat Anda Benar!')
        index++
        if (index < soal.length) {
            console.log(`Pertanyaan: ${soal[index].definition}`)
        }
        else {
            console.log('Hore Anda Menang!')
            rl.close()
        }
    }
    else {
        console.log('Wkwkwk, Anda kurang beruntung!')
    }

    rl.prompt();

}).on('close', () => {
    process.exit(0);
});