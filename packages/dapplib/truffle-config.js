require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture strong cruise script protect hope open force gasp'; 
let testAccounts = [
"0xae7c3b66077ba1ab2854d43bd48739e6c3d9faee5f1b89e4f3ee19a00464776b",
"0x0d927715f6acd9d004bb6eaa8e0b05b961abed1a151d47e7f61f7e047c5a0eb0",
"0xda4f90ef05bb53d81824b81485dd8180f6f1da155323ff9fd1783948e95c1d5b",
"0x766863795c7eebc1302cad4afe5349243671e9b468137f9051d52674450e44d2",
"0x3f71a6fb53160c64b80b80669243d98cf2e4b91a8fedf29c63fa129aa3d875f5",
"0x789ef0d33e790ce5bf71b0d5500342f1f926e9b1185119fefdebce81f6e50bf6",
"0xf5e52d289594297fb41f8ff0dccd8dcacb775757c9bcc2a09998df8008a2de4b",
"0xd7a53c9291b73e94364ebf3fbfe98430f02d2b8ce1adf5fb2eb89ba8ffa49905",
"0xb74ad2bf3cc11d5513e5ea0f005f0f3b8ed521f5e5a6c1653ab3762b1af2284c",
"0x0a3a74dd95d5aa20f371ebff354deb744a88de9ebd09f0d1b4b9edd7c4403c5d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


