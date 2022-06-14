# Moralis Market Place
## Create Project
```
npx create-react-app twitter-clone
npm install moralis react-moralis
npm install web3uikit
npm install antd assert crypto-browserify https-browserify stream-browserify os-browserify  stream-http url
npm install magic-sdk
```
## index.js
```
import { MoralisProvider } from "react-moralis";
...
<MoralisProvider appId="" serverUrl="">
    <App />
</MoralisProvider>
```
## App.js
```
import React, { useEffect, useState } from "react";
import "./App.css";


const App = () => {

  return (
    <>
     
    </>
  );
};

export default App;
```

## hardhat smartcontract setting
```
$ mkdir smartcontract
$ npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers
$ npm install @openzeppelin/contracts dotenv hardhat-shorthand hardhat-deploy hardhat-contract-sizer hardhat-gas-reporter @nomiclabs/hardhat-etherscan
$ npm install --save-dev  @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers
$ npm install prettier prettier-plugin-solidity solhint solidity-coverage
$ npx hh init
$ npx hh deploy --network rinkeby
$ npx hardhat verify --network rinkeby 0x50D382500d9dBb92C9741c5BC5b0Ef3f19Ff14Ce
```
## EtherScan Rinkeby Setting
```
_ticker : BTC
```

## moralis setting
```
MyFirstDapp > View Details > Sync > Add New Sync => Sync and Watch Contract Events
Put to Topic, Abi, Address, TableNames.
```

## Reference
- [Moralis Github](https://github.com/ethereum-boilerplate/ethereum-boilerplate)
- [Moralis YT](https://www.youtube.com/watch?v=MI_Se26Sfmo&list=PLFPZ8ai7J-iR4F882O2mBjqydynG9iDZS&index=36)