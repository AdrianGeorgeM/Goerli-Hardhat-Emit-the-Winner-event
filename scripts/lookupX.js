const hre = require("hardhat");

const CONTRACT_ADDRESS = "0xEF99Ce1a79b260710B34Ce2E968A9e6182AF4b86";

async function main() {
	//get the abi and bytecode of the contract and fill in CONTRACT_ADDRESS
	const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDRESS);

	console.log(await contract.x());

	console.log(`Contract was deployed to ${contract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
