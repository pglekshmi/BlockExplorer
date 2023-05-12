import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


// import {ethers} from "ethers";
function Table() {
  const [isMounted, setIsMounted] = useState(false);
  const [block, setBlock] = useState();
  useEffect(() => {Genis()},[]);
    const data1 = {
      "jsonrpc": "2.0",
      "method": "eth_blockNumber",
      "params": [],
      "id": 1
    };
    
    async function Genis(){

    let res= await fetch("http://127.0.0.1:8545", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    })
    res =await res.json();
      
        await console.log(res.result)
        const hexToDecimal = hex => parseInt(hex, 16);
        const dec1 = await hexToDecimal(res.result);
        await console.log(dec1);
        // gasPrice = dec1
        await setIsMounted(true);
        await setBlock(dec1);
        console.log(block);
        
        await console.log(isMounted);
      
    }
    
    if(isMounted){
      console.log(block);
  const blocksJSX = [];
  for(var i=0;i< block;i++)
  {
    
  const block1= block-i;
   console.log(block1);
   blocksJSX.push(
    <tr key={block1}>
      <td>
        <Link to={{ pathname: "/blockdetails", state: { block: block1 } }}>
          {block1}
        </Link>
      </td>
      <td></td>
      <td></td>
    </tr>
  );}
  
return (
  
  <div className="App">
  <table>

<tr>
  <th>Latest Blocks</th>
  {/* <th></th>
    <th>Gender</th> */}
</tr>
<tbody>
        {blocksJSX}
      </tbody>



</table>
</div>

  

  
)
  }
}

export default Table;