const hre = require("hardhat");

async function main() {
    const MyToken = await hre.ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy(hre.ethers.parseEther("1000")); // 发行1000个代币
    // 兼容不同版本 ethers
    console.log("MyToken 部署地址:", myToken.target || myToken.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});