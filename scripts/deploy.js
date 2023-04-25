const hre = require("hardhat");
async function main() {

  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");//Lock
  const crowdFunding = await CrowdFunding.deploy();

  await crowdFunding.deployed();

  console.log(
    `Crowedfunding deployed to ${crowdFunding.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
