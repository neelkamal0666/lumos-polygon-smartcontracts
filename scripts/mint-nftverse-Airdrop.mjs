const CONTRACT_ADDRESS = "0xA21AA0E56Db4CB930d624466E6Be387d6cB25298"
const META_DATA_URL = "ipfs://QmdpaZhT784AbgyQ9kjXziDR64CEae9CjLsvY8ipcf1aW7"

async function mintNFT(contractAddress, metaDataURL) {
    const ExampleNFT = await ethers.getContractFactory("NFTVerseAirdrop")
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