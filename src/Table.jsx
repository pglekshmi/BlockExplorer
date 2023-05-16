import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


// import {ethers} from "ethers";
function Table() {
  const [isMounted, setIsMounted] = useState(false);
  const [block, setBlock] = useState();
  const blocksJSX = [];
  const parameter = "1";
  const data1 = {
    "jsonrpc": "2.0",
    "method": "eth_blockNumber",
    "params": [],
    "id": 1
  };
  useEffect(() => {Genis()}, []);


  async function Genis() {

    let res = await fetch("http://127.0.0.1:8545", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    })
    res = await res.json();

    console.log(res.result)
    const hexToDecimal = hex => parseInt(hex, 16);
    const dec1 = hexToDecimal(res.result);
    console.log(dec1);
    // gasPrice = dec1

    setBlock(dec1);
    setIsMounted(true);

  }

  if (isMounted) {
    console.log("bloclccc", block);
    for (var i = 0; i < block; i++) {

      const block1 = block - i;
      console.log("blk01", block1);
      blocksJSX.push(block1);
    }

    console.log(blocksJSX)
  }
  console.log(parameter);

    return (
      

      <div className="App">
       
         <table id="blocks" width="100%">
           
             <tr >Latest Blocks</tr>
             <tr>
              <th>Number</th>
              <th>Timestamp</th>
             </tr>
             <tr>
               <td>
               
                
              { blocksJSX.length > 0 && blocksJSX.map((blk) => {
                console.log(parameter);
               
                return(

                 
                 <div key={blk}> 
                
                {/* <Link to="blockdetails" state={parameter}>click</Link> */}
                      {/* <Link to={{ pathname: "blockdetails", state: {parameter} }}>{blk}
                     </Link> */}
                     <Link to="blockdetails" state={blk}>{blk}</Link>
                     </div> 
                      )
              })} 
         </td>
            </tr>
          
        </table>
      </div>
    )
  }

export default Table;