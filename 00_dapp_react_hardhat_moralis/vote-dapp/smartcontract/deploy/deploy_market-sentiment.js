const { network, ethers } = require("hardhat")
let { networkConfig } = require('../helper-hardhat-config')
module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId
}) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = await getChainId() 
    const args = [];   
    const marketSentiment = await deploy("MarketSentiment", {
        from: deployer,
        args: args,
        log: true,
    })
    console.log(marketSentiment.address)

    const networkName = networkConfig[chainId]['name']        

    log(`Verify with:\n npx hardhat verify --network ${networkName} ${marketSentiment.address}`)
}


module.exports.tags = ["all", "market-sentiment"]