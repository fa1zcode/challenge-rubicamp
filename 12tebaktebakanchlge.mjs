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

var counter = 0

rl.prompt();

rl.on('line', (answer) => {

    //console.log(answer);
    if (answer == 'skip') {
        soal.push(soal[index])
        index++
        console.log(`Pertanyaan: ${soal[index].definition}`)
    }
    else if (answer == soal[index].term) {
        console.log('Selamat Anda Benar!')
        counter = 0
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
        counter++
        console.log(`anda salah ${counter} kali`)

    }

    rl.prompt();

}).on('close', () => {
    process.exit(0);
});