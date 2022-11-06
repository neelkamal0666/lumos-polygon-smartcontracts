const CONTRACT_ADDRESS = "0x5e1780a1F7ED6E42807a2e06Ee40c1b3B9779C38"
const META_DATA_URL = "ipfs://bafyreifba7sbmv76u37fqcd4y5kzyzohzsdvtydpolyo5fk5uy5lx2b7ge/metadata.json"

async function transferNFT(contractAddress, metaDataURL) {
    const ExampleNFT = await ethers.getContractFactory("NFTVerse")
    const [owner] = await ethers.getSigners()
    await ExampleNFT.attach(contractAddress).transferNFT(owner.address, '0xa5703455c18dE42e52894Af85b6224b52d4D4868', 1)
    console.log("NFT transferred to: ", owner.address)
}

transferNFT(CONTRACT_ADDRESS, META_DATA_URL)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });