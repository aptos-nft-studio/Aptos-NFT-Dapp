export const collectionName = "Aptos NFT Studio"; // Case sensitive!
export const MaxMint = 3;
export const COLLECTION_SIZE = 100;

// To remove the background of the dapp to a solid color just delete the "collectionCoverUrl" url below
// Any hosted image can be used - jpeg, gif, png
export const collectionCoverUrl = "/collectionCoverUrl.jpeg";
export const collectionBackgroundUrl =
  "https://cdn.pixabay.com/photo/2018/04/16/12/59/mountains-3324569_1280.jpg";

export const mode = "dev"; // "dev" or "test" or "mainnet"
export let NODE_URL;
export const CONTRACT_ADDRESS =
  "0x3c9d531fe53e7dde20b1a745922d1627943153e5f8415670ddca06773d58e426";
let FAUCET_URL;

if (mode == "dev") {
  NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
  FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
  NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
  FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
  NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
  FAUCET_URL = null;
}
