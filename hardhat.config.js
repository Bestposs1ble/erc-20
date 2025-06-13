require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    ganache: {
      url: "http://127.0.0.1:9545",
      accounts: [
        // 用 Ganache 显示的私钥替换下面的内容
        "0x0a6ee2adda5ed5eb98d8378e06e4959fefd0f23f381d0d9a06af3612682095ec"
      ]
    }
  }
};
