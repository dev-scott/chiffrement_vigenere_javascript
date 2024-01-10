function vigenereCipher(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedText = '';

    for (let i = 0, j = 0; i < message.length; i++) {
        const currentChar = message.charAt(i);

        if (currentChar >= 'A' && currentChar <= 'Z') {
            const shift = key.charCodeAt(j) - 'A'.charCodeAt(0);
            const encryptedChar = String.fromCharCode(((currentChar.charCodeAt(0) + shift - 'A'.charCodeAt(0)) % 26) + 'A'.charCodeAt(0));

            encryptedText += encryptedChar;
            j = (j + 1) % key.length;
        } else {
            encryptedText += currentChar;
        }
    }
    
    return encryptedText;
}

function encrypt() {
    const messageInput = document.getElementById('message');
    const keyInput = document.getElementById('key');
    const resultOutput = document.getElementById('result');

    const message = messageInput.value;
    const key = keyInput.value;

    const encryptedMessage = vigenereCipher(message, key);
    resultOutput.value = encryptedMessage;
}
