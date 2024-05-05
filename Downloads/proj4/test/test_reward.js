const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");
//import abi from "../abi.json";
//const { ethers, upgrades } = require("hardhat");
// require("dotenv").config();
//import abi from "../abi.json"
async function main() {
const contract = await ethers.getContractFactory("Reward");
const rd = await contract.attach("0xbA82f5c2ba750cC8e969e7A1CaeB0a3783e3177a");
 const tx4 = await rd.approveAddr("0xD8F0533d1cbCd6C4a8c1B991bA9D310b3d705449","2000");
 await tx4.wait();

}

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })