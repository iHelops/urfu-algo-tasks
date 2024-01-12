// https://www.codewars.com/kata/52b757663a95b11b3d00062d

function toWeirdCase(string: string) {
    const words = string.split(' ');

    const newWords = words.map(word => {
        const chars = word.split('');

        const newChars = chars.map((char, index) => {
            return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        });

        return newChars.join('');
    });

    return newWords.join(' ');
}
