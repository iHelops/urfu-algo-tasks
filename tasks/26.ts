// https://www.codewars.com/kata/54b724efac3d5402db00065e

const MORSE_CODE: Record<string, string> = {}

function decodeMorse(morseCode: string){
    const words = morseCode.split('   ')
    return words.map(word => {
        return word.split(' ').map(letter => {
            return MORSE_CODE[letter]
        }).join('')
    }).join(' ').trim()
}
