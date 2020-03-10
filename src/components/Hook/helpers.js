export function getExclamationMarks(numChars) {
    return numChars > 0 ? Array(numChars + 1).join('!') : '';
}