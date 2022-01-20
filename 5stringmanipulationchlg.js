function stringManipulation(word) {

    const vowel = ('AEIOUaeiou')

    if (vowel.match(word[0])) {
        console.log(word)
    } else (console.log(word.slice(1, word.length) 
        + (word.charAt(0)) + 'nyo'))
}


stringManipulation('ayam')
stringManipulation('bebek')
stringManipulation('elang')
stringManipulation('megalodon')
stringManipulation('Ular')
stringManipulation('Tupai')