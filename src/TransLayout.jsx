import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function TransLayout() {
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation();
  const { block } = location.state;
  const [blockdetails, setblockdetails] = useState([]);
  const [transCount, settransCount] = useState();
  useEffect(() => { BlockD() }, []);
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
    const data2 = {

      "jsonrpc": "2.0",
      "method": "eth_getBlockTransactionCountByNumber",
      "params": [
        block.block
      ],
      "id": 1
    }
    let blockData = await fetch("http://127.0.0.1:8545", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    blockData = await blockData.json();
    setblockdetails(blockData.result)


    let trans = await fetch("http://127.0.0.1:8545", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data2),
    });
    trans = await trans.json();
    settransCount(trans.result);
    setIsMounted(true)
    // console.log(trans.result);

  }

  // console.log(blockdetails);
  if (isMounted) {
    console.log(blockdetails.transactions[0]);
    const transac = blockdetails.transactions[0];
  }

  // const bata = blockdetails.transactions[0];
  // const batahash = bata.hash;
  // console.log(batahash);
  // console.log(bata[0].hash);
  console.log(transCount);
  const hexToDecimal = hex => parseInt(hex, 16);
  const timestamp = hexToDecimal(blockdetails.timestamp);
  const size = hexToDecimal(blockdetails.size);
  const length = hexToDecimal(transCount);
  const gas = hexToDecimal(blockdetails.gasUsed);
  const diffi = hexToDecimal(blockdetails.difficulty);
  const gasL = hexToDecimal(blockdetails.gasLimit);
  const totDiffi = hexToDecimal(blockdetails.totalDifficulty);
  // const length = blockdetails.transactions.length;
  // console.log(tot);


  return (
    <div>
      <h2>Block Details</h2>
      <p>Block Height:{block.block}</p>
      <p>Block Hash:{blockdetails.hash}</p>
      <p>Block timestamp:{timestamp}</p>
      <p>Transactions:<Link to="/Transactions" state={blockdetails}>{length} </Link>transactions</p>
      <p>Size: {size}bytes</p>
      <p>Difficulty:{diffi} </p>
      <p>Miner: {blockdetails.miner}</p>
      <p>Gas Used: {gas} Wei</p>
      <p>Gas Limit: {gasL} Wei</p>
      <p>Nonce : {blockdetails.nonce}</p>
      <p>Total Difficulty: {totDiffi}</p>
      <p>Parent Hash:{blockdetails.parentHash}</p>
      <p>Receipts Root: {blockdetails.receiptsRoot}</p>
      <p>State Root: {blockdetails.stateRoot}</p>
      <p>Sha3Uncles: {blockdetails.sha3Uncles}</p>


      {/* <Link to="transactions">trr</Link> */}

    </div>
  )

}