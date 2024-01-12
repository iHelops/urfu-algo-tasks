// https://www.codewars.com/kata/529b418d533b76924600085d

function toUnderscore(string: string) {
    string = string.toString();

    const stringParts = string.split(/(?=[A-Z])/);
    return stringParts.join('_').toLowerCase();
}
