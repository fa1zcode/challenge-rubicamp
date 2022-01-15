function stringManipulation(sentence) {
    const vowel = ('AEIOUaeiou')
    let kalimat = sentence.split(' ')
    let manipulated = []


    for (i = 0; i < kalimat.length; i++) {
        if (vowel.match((kalimat[i][0]))) { manipulated.push(kalimat[i]) }
        else manipulated.push(kalimat[i].slice(1, kalimat[i].length) + kalimat[i][0] + 'nyo')
 
    } console.log(manipulated.join(' '))
}


stringManipulation('ibu pergi ke pasar bersama aku')
