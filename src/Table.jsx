import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

import Transactions from "./Transactions";
// import {ethers} from "ethers";
function Table() {
  const [block, setBlock] = useState();
  useEffect(() => {
    const data1 = {
      "jsonrpc": "2.0",
      "method": "eth_blockNumber",
      "params": [],
      "id": 1
    };


    fetch("http://127.0.0.1:8545", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    }).then(res => res.json())
      .then(gasPrice => {
        console.log(gasPrice.result)
        const hexToDecimal = hex => parseInt(hex, 16);
        const dec1 = hexToDecimal(gasPrice.result);
        console.log(dec1);
        // gasPrice = dec1
        setBlock(dec1);
        return dec1;
      })
      .catch((error) => {
        console.error(error)
      })
  },[]);


return (
  
  <div className="App">
  <table>

<tr>
  <th>Latest Blocks</th>
  {/* <th></th>
    <th>Gender</th> */}
</tr>
<tr>
  <td><Link to="blockdetails" state={{block:{block}}}>{block}</Link></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td>{block -1}</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td>{block - 2}</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td>{block - 3}</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td>{block - 4}</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td>{block - 5}</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td>{block - 6}</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td>{block - 7}</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td>{block - 8}</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td>{block - 9}</td>
  <td></td>
  <td></td>
</tr>
</table>
</div>

  

  
)
}
export default Table;