require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad heavy kiwi swing tell'; 
let testAccounts = [
"0x0d2b1f1db85b09e30646fa5a64c19adb33a970c657dbbb571d7c17c33e4eeb27",
"0x7986df9e1c09d11a72001eb6327d6faa652527ce4f95198dbd8beaeed5a2d63f",
"0x01153c24aa66b06b957cf8707aaf345d7aa055aa96549cebbb827f1756e0b444",
"0x11786b5062510156099d1102f85fc6634659845845e900b0de0caf7b317ec4d4",
"0xf84e30c8c5c485e4b35dcb569e631070f0b2011555e4670084a407499bd0822e",
"0x6f762bd7206a27099b924fe1c978a5b71a569664d60e73d1f0d189e0fd221454",
"0x69ddd2adf51c813f4300d367d049e79f8142fbdddbbfd33c834fcaae021c4a4c",
"0x9245970adc915e4b6c1437207e5a6a91173e435e6b8a6fae2d64b8da7cf18e26",
"0x876b664e9933f6fcebb17895fa55db592fc5dfe74f3496f40a8621f1702fa567",
"0xea6b7cf91d466c01555b5a74766595e018f4826d47ce8fe40a60f4459c40a280"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
