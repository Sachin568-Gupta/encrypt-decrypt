# encrypt-decrypt

# secret-maker
Encrypt and decrypt text

## Install
npm i encrypt-decrypt-string

## Sample
````
STEP 1
const {encryption_key,decryption_key} = require('encrypt-decrypt-string')


STEP 2 for encryption
const test_result_encrption = encryption_key('mySecretSalt','sachin@gmail.com')


STEP 3 for decryption 
const test_result_decrption = decryption_key('mySecretSalt',test_result_encrption)

Result
console.log(test_result_encrption,test_result_decrption)
````