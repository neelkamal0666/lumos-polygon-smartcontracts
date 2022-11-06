const CONTRACT_ADDRESS = "0xca04eF612c8CdE08aB8756b042af248c991f43Aa"
const META_DATA_URL = "ipfs://bafyreifba7sbmv76u37fqcd4y5kzyzohzsdvtydpolyo5fk5uy5lx2b7ge/metadata.json"

async function mintNFT(contractAddress, num) {
    const ExampleNFT = await ethers.getContractFactory("NumberChanger")
    const [owner] = await ethers.getSigners()
    await ExampleNFT.attach(contractAddress).setNumber(num)
    console.log("Number set to: ", owner.address)
}

async function getNumber(contractAddress) {
    const ExampleNFT = await ethers.getContractFactory("NumberChanger")
    const [owner] = await ethers.getSigners()
    const num = await ExampleNFT.attach(contractAddress).getNumber()
    console.log("Number is : ", num)
}

// mintNFT(CONTRACT_ADDRESS, 1)
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });



getNumber(CONTRACT_ADDRESS)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });