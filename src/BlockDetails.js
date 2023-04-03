import {ethers} from "ethers";

async function blockDetails(){
    
        const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/51b67dd2e0ae4090abd8fed0b84bd213`);
    
        let blockNumber =await  provider.getBlockNumber();
        // const block = await provider.getBlock(blockNumber) ;
        // const timestamp =  block.timestamp;
        // const blockDetails = [{blockNumber:{blockNumber},
        //                          timestamp:{timestamp}}];
        const array =[]
    for(i=0;i<10;i++){
     blockNumber = blockNumber-i;
     var block = await provider.getBlock(blockNumber);
     array.push(block);
    //  var timestamp = block.timestamp;
    //  var blockDetails= [{blockNumber:blockNumber,
    //                         timestamp:timestamp}]
    }  
    console.log(array) 
}