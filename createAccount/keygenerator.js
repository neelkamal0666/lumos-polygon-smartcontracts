const ethWallet = require('ethereumjs-wallet');

let addressData = ethWallet['default'].generate();
console.log(`Private key = , ${addressData.getPrivateKeyString()}`);
console.log(`Address = , ${addressData.getAddressString()}`);
