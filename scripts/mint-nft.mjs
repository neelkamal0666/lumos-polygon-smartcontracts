const CONTRACT_ADDRESS = "0x24Be2e1af2af800590355ba2Fbdfb048cd25B120"
const META_DATA_URL = "ipfs://bafyreifba7sbmv76u37fqcd4y5kzyzohzsdvtydpolyo5fk5uy5lx2b7ge/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
    const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
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