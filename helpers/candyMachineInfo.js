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
  "0xf6bbf3b1f2ec965b15669ca43700312f4ea07e5acb494f6dc2f23449c6ae9d9f";
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
