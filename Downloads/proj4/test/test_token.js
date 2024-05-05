const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");
//import abi from "../abi.json";
//const { ethers, upgrades } = require("hardhat");
// require("dotenv").config();
//import abi from "../abi.json"
async function main() {
const contract = await ethers.getContractFactory("Token");
const rd = await contract.attach("0xe9b78511874D43c7351aa086f3533962543DaaCE");
//   let alice = "0x1044C2b2547F7e4fAF95FdfC2bDB16f0cBE38199";
//   let bob = "0xf36C2c821E3e8f62eB1189453126b0b5D601F143";
//   let cim = "0x22bB87DB41bAFC3D826a699cFb80513D1d07b140";

//  const tx1 = await rd.mint("100000000");
//  await tx1.wait();
// const tx2 = await rd.totalSupply();
  //const tx3 = await rd.disable_mint();
  const rewardAddr = "0x644fACED79ff6645273da8bfAdD76bEfA8D5f9C6";
 const tx4 = await rd.approve("0xD8F0533d1cbCd6C4a8c1B991bA9D310b3d705449","90000000");
 await tx4.wait();
const tx5 = await rd.balanceOf(rewardAddr);
 console.log(tx5);
// const tx6 = rewardAddr.balance();
// console.log(tx6);
}

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })