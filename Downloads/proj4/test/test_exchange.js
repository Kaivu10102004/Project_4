const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");
//import abi from "../abi.json";
//const { ethers, upgrades } = require("hardhat");
// require("dotenv").config();
//import abi from "../abi.json"
async function main() {
  const contract = await ethers.getContractFactory("TokenExchange");
  const contract_address = "0xD8F0533d1cbCd6C4a8c1B991bA9D310b3d705449";
  const rd = await contract.attach(contract_address);

  //test create pool 
      // const tx1 = await rd.createPool("1000000", {value: 1500000n});
      //   await tx1.wait();

  //test swapTokensForETH
        // const tx2 = await rd.token_approve(contract_address,"100000");
        // const tx3 = await rd.swapTokensForETH("100000",10);
        // await tx3.wait();

  //test swapETHForTokens
    //  const tx4 = await rd.swapETHForTokens(10,{value: 100000n});
    //  await tx4.wait();

  //test addLiquidity
    // const tx5 = await rd.token_approve(contract_address,"20000");
    // const tx6 = await rd.addLiquidity(110,90,{value: 10000n});
    // await tx6.wait();

  //test removeLiquidity
      // const tx12 = rd.app
      // const tx7 = await rd.removeLiquidity(100,110,90);
      // await tx7.wait();

  //test removeAllLiquidity
   const tx8 = await rd.removeAllLiquidity(110,90);
    await tx8.wait();

  //get token in address reward
   const tx9 = await rd.get_token_reserves_rewardAddr();
  console.log(tx9);

  // //get eth in address reward
   const tx10 = await rd.get_eth_reserves_rewardAddr();
   console.log(tx10);

  const tx11 = await rd.get_reserves();
  console.log(tx11);
}

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })