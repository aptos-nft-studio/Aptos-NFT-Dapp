## Aptos-NFT-Dapp Mintsite

Video Tutorial: [https://www.youtube.com/watch?v=h1HUgilNuSE](https://www.youtube.com/watch?v=h1HUgilNuSE)

### Getting Set Up

Pre-requisites

* Ensure you have recent versions of both node and yarn installed.
* Contract code has to be deployed first. Refer to contract repo.
* Account needs to be in whitelist (if minting is only for whitelisted accounts). Refer to contract repo.

### Installation

Step 1)

Clone this repo

Step 2)

Make sure you are located in /Aptos-NFT-Dapp and use npm to install dependencies (IMPORTANT - not yarn) 

```bash
cd Aptos-NFT-Dapp
npm install
```

### Configuration

Configure settings in **/helpers/candyMachineInfo.js** is configured correctly (see below for filepath)
* Line 1 - ```collectionName```` set name of NFT collection
* Line 2 - ``` MaxMint ```` set the maximum NFTs per mint
* Line 11 - ``` mode ```` set to the correct network (dev,test,main)
* Line 13 - ```CONTRACT_ADDRESS```` set resource account address
 
### Run the Mintsite

``` to
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project Structure

### Aptos Wallet

Petra Aptos Wallet https://chrome.google.com/webstore/detail/petra-aptos-wallet/ejjladinnckdgjemekebdpeokbikhfci
