import { ethers } from "ethers";

const BASE_RPC_URL = "https://mainnet.base.org";

async function monitorBaseTransactions() {
    const provider = new ethers.JsonRpcProvider(BASE_RPC_URL);
    console.log("Connecting to Base network...");

    provider.on("block", async (blockNumber) => {
        try {
            const block = await provider.getBlock(blockNumber, true);
            console.log(`\nNew Block: #${blockNumber} | Transactions: ${block?.transactions.length}`);
            
            // نمایش اطلاعات ۳ تراکنش اول بلاک به عنوان نمونه
            block?.transactions.slice(0, 3).forEach((txHash: any) => {
                console.log(`- Tx Hash: ${txHash}`);
            });
        } catch (error) {
            console.error("Error fetching block details:", error);
        }
    });
}

monitorBaseTransactions().catch((err) => {
    console.error("Failed to start transaction monitor:", err);
});

// برای حل ارور تداخل متغیرهای سراسری در TS
export {};