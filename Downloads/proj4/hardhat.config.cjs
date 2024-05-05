require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
const { mnemonic } = require('./secrets.json');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "testnet",
  networks: {
  	localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
    },
    testnet: {
      url: "https://bsc-testnet-rpc.publicnode.com",
      chainId: 97,
      gas : 2e6,
      gasPrice: 10e9,
      accounts: ["5bfcf0e5fa73fbeec8dd12389b00e45a440e523607e4f2ba4a84b679addadf69"],
        // {
        //   privateKey acc_1: '42ded834229b5da521b18f5fb0ed6e42423d22de983f471300fa7029db3c48e0',
        //   privateKey acc_2: '5bfcf0e5fa73fbeec8dd12389b00e45a440e523607e4f2ba4a84b679addadf69',
        //   privatekey acc_3: '29e182851a431c4a206ee8cd16be84db1b60b61006f6708b0193db7106a4b27e'
        // },

        // Thêm các tài khoản khác nếu cần
    },
    mainnet: {
      url: "https://bsc-dataseed.bnbchain.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts:{mnemonic: mnemonic} 
    }
  },
  solidity: {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: true
    }
   }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};
