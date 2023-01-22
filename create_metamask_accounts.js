const fs = require('fs');
const Web3 = require('web3');

// Connect to the MetaMask provider
const web3 = new Web3(Web3.givenProvider);

// Create an array to store the accounts
const accounts = [];

// Create 5 accounts
for (let i = 0; i < 5; i++) {
    accounts.push(web3.eth.accounts.create());
}

// Write the accounts to a file
fs.writeFileSync("metamask_accounts.txt", JSON.stringify(accounts));
console.log("MetaMask accounts have been created and written to metamask_accounts.txt");
