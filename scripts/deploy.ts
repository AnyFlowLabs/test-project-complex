import hre from "hardhat";

export async function main() {
    console.log('Deploying AnyflowParentHelloWorld...')

    const parent = await hre.viem.deployContract("AnyflowParentHelloWorld");

    console.log('AnyflowParentHelloWorld deployed to:', parent.address);

    console.log('Deploying AnyflowChildHelloWorld...')

    const child = await hre.viem.deployContract("AnyflowChildHelloWorld", ["Hello, from AnyFlow!"]);

    console.log('AnyflowChildHelloWorld deployed to:', child.address);

    console.log('Linking parent and child...')

    const txHash1 = await parent.write.addChild([child.address])

    console.log('Waiting for tx: ' + txHash1)

    const receipt1 = await (await hre.viem.getPublicClient()).waitForTransactionReceipt({ hash: txHash1 })

    console.log('Calling parent contract...')

    const txHash2 = await parent.write.callHello()

    console.log('Waiting for tx: ' + txHash2)

    const receipt2 = await (await hre.viem.getPublicClient()).waitForTransactionReceipt({ hash: txHash2 })

    console.log('Transaction mined! Deployment complete!')
}

main()