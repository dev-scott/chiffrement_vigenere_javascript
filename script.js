function vigenereCipher(message, key, encrypt) {
  message = message.toUpperCase();
  key = key.toUpperCase();

  let resultText = "";

  for (let i = 0, j = 0; i < message.length; i++) {
    const currentChar = message.charAt(i);

    if (currentChar >= "A" && currentChar <= "Z") {
      const shift = key.charCodeAt(j) - "A".charCodeAt(0);
      let processedChar;

      if (encrypt) {
        // Chiffrement
        processedChar = String.fromCharCode(
          ((currentChar.charCodeAt(0) + shift - "A".charCodeAt(0)) % 26) +
            "A".charCodeAt(0)
        );
      } else {
        // Déchiffrement
        processedChar = String.fromCharCode(
          ((currentChar.charCodeAt(0) - shift + 26 * 2) % 26) +
            "A".charCodeAt(0)
        );
      }

      resultText += processedChar;
      j = (j + 1) % key.length;
    } else {
      // Caractère non alphabétiques
      resultText += currentChar;
    }
  }

  return resultText;
}

function encrypt() {
  const messageInput = document.getElementById("message");
  const keyInput = document.getElementById("key");
  const resultOutput = document.getElementById("result");

  const message = messageInput.value;
  const key = keyInput.value;

  const encryptedMessage = vigenereCipher(message, key, true);
  resultOutput.value = encryptedMessage;
}

function decrypt() {
  const messageInput = document.getElementById("message");
  const keyInput = document.getElementById("key");
  const resultOutput = document.getElementById("result");

  const message = messageInput.value;
  const key = keyInput.value;

  const decryptedMessage = vigenereCipher(message, key, false);
  resultOutput.value = decryptedMessage;
}
