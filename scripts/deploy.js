const hre = require("hardhat");

async function main() {
	//hardhat-ethers is a plugin that adds ethers.js to hardhat
	const Contract = await hre.ethers.getContractFactory("Contract"); //get the contract factory
	const contract = await Contract.deploy(); //deploy the contract

	await lock.deployed();

	console.log(
		`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
	);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
