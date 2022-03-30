// class Encryption {
  const cipher = (salt) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) =>
      textToChars(salt).reduce((a, b) => a ^ b, code);
    return (text) =>
      text
        .split("")
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join("");
  };
 const decipher = (salt) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) =>
      textToChars(salt).reduce((a, b) => a ^ b, code);
    return (encoded) =>
      encoded
        .match(/.{1,2}/g)
        .map((hex) => parseInt(hex, 16))
        .map(applySaltToChar)
        .map((charCode) => String.fromCharCode(charCode))
        .join("");
  };

  function encryption_key(secret_key, text) {
    const myCipher = cipher(secret_key);
    return myCipher(text);
  }
  function decryption_key(secret_key, text) {
    const myDecipher = decipher(secret_key);
    return myDecipher(text);
  }
// }

module.exports = {
  encryption_key,
  decryption_key
};

// To create a cipher
// const myCipher = cipher('mySecretSalt')
//Then cipher any text:
// let data = myCipher('sachin@gmail.com');
// console.log(data)
//To decipher, you need to create a decipher and use it:
// const myDecipher = decipher('mySecretSalt')
// console.log(myDecipher(data))
