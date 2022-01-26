if (!process.argv[2]){
    console.log('Tolong sertakan inputan soalnya')
    console.log('Misalnya \'node solution.js data.json\'')
    process.exit(1);
}
import readline from 'readline';
import fs from 'fs'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Jawaban: '
});
console.log('Selamat datang di permainan Tebak-tebakan, kamu akan diberikan pertanyaan dari file ini \'data.json\'.')
console.log('Untuk bermain, jawablah dengan jawaban yang sesuai')
console.log('Gunakan \'skip\' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi. \n')



var soal = JSON.parse(fs.readFileSync(process.argv[2], 'utf-8'));
//console.log(soal)
let index = 0
console.log(`\nPertanyaan: ${soal[index].definition}`)

var counter = 0

rl.prompt();

rl.on('line', (answer) => {

    //console.log(answer);
    if (answer == 'skip') {
        soal.push(soal[index])
        index++
        console.log(`\nPertanyaan: ${soal[index].definition}`)
    }
    else if (answer == soal[index].term) {
        console.log('\nAnda Beruntung!')
        counter = 0
        index++
        if (index < soal.length) {
            console.log(`\nPertanyaan: ${soal[index].definition}`)
        }
        else {
            console.log('\nAnda Berhasil!')
            rl.close()
        }
    } 
    else {
        counter++
        console.log(`\n Anda kurang beruntung! anda telah salah ${counter} kali, silahkan coba lagi`)

    }

    rl.prompt();

}).on('close', () => {
    process.exit(0);
});