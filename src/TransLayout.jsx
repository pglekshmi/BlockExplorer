import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function TransLayout() {
  const location = useLocation();
  const { block } = location.state;
  const [blockdetails, setblockdetails] = useState({});
  useEffect(() => { BlockD(); },[]);
  async function BlockD() {
    const data = {
      "jsonrpc": "2.0",
      "method": "eth_getBlockByNumber",
      "params": [
        block.block,
        true
      ],
      "id": 1
    }
    await fetch("http://127.0.0.1:8545", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(gasPrice => {
        //  console.log(gasPrice.result)

        // return gasPrice.result;
        gasPrice= (gasPrice.result);

        setblockdetails(gasPrice);
      })
      .catch((error) => {
        console.error(error)
      })


  }
  
  console.log(blockdetails );
  const hexToDecimal = hex => parseInt(hex, 16);
    const timestamp = hexToDecimal(blockdetails.timestamp);
    // const size = hexToDecimal(blockdetails.size);
    // console.log(size);
  

  return (
    <div>
      <h2>Block Details</h2>
      <p>Block Height:{block.block}</p>
      <p>Block timestamp:{timestamp}</p>
      <p>Transactions:{blockdetails.transactions.length} transactions</p>
      <p>Size: bytes</p>
      {/* <Link to="transactions">trr</Link> */}
      <Outlet />
    </div>
  )

}