
import {useEffect,useState} from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Transdetails(props){
    const [isMounted, setIsMounted] = useState(false);
    const location = useLocation();
    const propsData1 = location.state;
    const [transData,setTransData] = useState([]);
    var i=0;
    
    useEffect(() => { TransD() }, []);

    
    async function TransD(){
      const tl = await propsData1.length;
      console.log(tl);
       
      for(i;i<tl;i++){
        const data = await {
            
                "jsonrpc": "2.0",
                "method": "eth_getTransactionByHash",
                "params": [
                    propsData1[i].hash
                ],
                "id": 1
            
        }
        let transData1 = await fetch("http://127.0.0.1:8545", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
          transData1= await transData1.json();
          console.log("hello")
        //   console.log(transData.result);
          setTransData(transData1);
        setIsMounted(true)
        
    }}
    if(isMounted){
      console.log("hai");
    console.log(transData.result);
     const hexToDecimal = hex => parseInt(hex, 16);
     const blockNum = hexToDecimal(transData.result.blockNumber);
     console.log(blockNum);
     const chainid = hexToDecimal(transData.result.chainId);
     const gas = hexToDecimal(transData.result.gas);
     const gasPrice = hexToDecimal(transData.result.gasPrice);
      const maxfee = hexToDecimal(transData.result.maxFeePerGas);
      const maxpriority = hexToDecimal(transData.result.maxPriorityFeePerGas);
      const value = hexToDecimal(transData.result.value);
      const input = hexToDecimal(transData.result.input);
    return(
        <div>
            <p>Transactionhash:{transData.result.hash}</p>
            <p>Block:{blockNum}</p>
            <p>ChainID:{chainid}</p>
            <p>From:{transData.result.from}</p>
            <p>To:{transData.result.to}</p>
            <p>Gas:{gas}</p>
            <p>GasPrice:{gasPrice}  Gwei</p>
            <p>MaxFeePerGas:{maxfee}</p>
            <p>MaxPriorityFeePerGas : {maxpriority}</p>
            <p>Value: {value} Ethers</p>
            <p>v: {transData.result.v}</p>
            <p>r: {transData.result.r}</p>
            <p>s: {transData.result.s}</p>
            <p>Input:</p>
            <textarea id="json-text-area" rows="4" cols="50" name="input">{input}</textarea>
        </div>
    );
    

}
}
export default Transdetails;