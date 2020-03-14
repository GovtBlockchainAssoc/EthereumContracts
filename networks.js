//require('dotenv').config();
//const mnemonic = process.env.MNEMONIC;
const mnemonic = "trade invite actress recall acid amount pupil company series kick hope anchor";

const HDWalletProvider = require("truffle-hdwallet-provider");
// Create your own key for Production environments (https://infura.io/)
// const INFURA_ID = process.env.INFURA_ID || 'd6760e62b67f4937ba1ea2691046f06d';
const INFURA_ID = '4707197d3863444c8fab719ee7b57189'; 
const ProjSecret = 'cb837061fe5546e48d2c6b6c88f344ce';

const PoA_endpoint = "https://etht5zt7j-dns-reg1.eastus2.cloudapp.azure.com:8540";
const metamask_mnemonic = "trade invite actress recall acid amount pupil company series kick hope anchor";

const configNetwok = (network, networkId, path = "m/44'/60'/0'/0/", gas = 4465030, gasPrice = 1e10) => ({
  provider: () => new HDWalletProvider(
    mnemonic, `https://${network}.infura.io/v3/${INFURA_ID}`, 
        0, 1, true, path
    ),
  networkId,
  gas,
  gasPrice,
});

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    azure: {
      provider: () => new HDWalletProvider(metamask_mnemonic, "http://etht5zt7j-dns-reg1.eastus2.cloudapp.azure.com:8540"),
      network_id: 103098097,
      gas: 50000000,
      gasPrice : 0
    },
    sokol: {
      provider: function() {
            return new HDWalletProvider(
              metamask_mnemonic,
           "https://sokol.poa.network")
      },
      network_id: 77,
      gas: 5000000,
      gasPrice: 1000000000
    },
    ropsten: configNetwok('ropsten', 3),
    kovan: configNetwok('kovan', 42),
    rinkeby: configNetwok('rinkeby', 4),
    main: configNetwok('mainnet', 1),
  },
};
