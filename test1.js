const vowel = ('AEIOUaeiou')
let sentence = 'ibu pergi ke pasar bersama aku'
let kalimat = sentence.split(' ')


for (i=0 ; i<kalimat.length ; i++){
    if (vowel.match((kalimat[i][0]))) {console.log(kalimat[i])}
    else console.log('try again')
}
