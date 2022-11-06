const CONTRACT_ADDRESS = "0x5e1780a1F7ED6E42807a2e06Ee40c1b3B9779C38"
const META_DATA_URL = "ipfs://QmWnL6ww61ytFtrJzRMiyo2p1siKDMwPgc2fe89HEWjbmq"

async function mintNFT(contractAddress, metaDataURL) {
    const ExampleNFT = await ethers.getContractFactory("NFTVerse")
    const [owner] = await ethers.getSigners()
    await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
    console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });