import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import styles from "./style/Home.module.css";
import { useNavigate  } from "react-router-dom";
function TransLayout1() {
    const { blk }  = useParams();
    console.log({blk})
//   const navigate = useNavigate();
//   // console.log("hi")
//   // console.log(props);
//   // const [isMounted, setIsMounted] = useState(false);
//   const location = useLocation();
//   // const { block } = location.state;
//   // console.log("hai")
//   // console.log(block);
//   const blk = location.state;
//   // console.log("BLoccccck",blk);
//   var lblk;
//   const [isMounted,setIsMounted] =useState(false);
//   const [blockdetails, setblockdetails] = useState([]);
//   const [transCount, settransCount] = useState();
//   useEffect(() => { BlockD() }, []);
//   async function BlockD() {
//     const data1 = {
//       "jsonrpc": "2.0",
//       "method": "eth_blockNumber",
//       "params": [],
//       "id": 1
//     };
//     let res = await fetch("http://127.0.0.1:8545", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data1),
//     })
//     res = await res.json();

//      lblk = await res.result;
//      console.log("Largest Hex",lblk);
//     //  const hexToDecimal = hex => parseInt(hex, 16);
//     const dec1 = hexToDecimal(lblk);
//     // console.log("Largest",dec1);
//     if(blk>dec1){
//       console.log("hiiii")
//       navigate("/errorpage", { state: blk  });
//     }
//     else{
   
//     const data = {
//       "jsonrpc": "2.0",
//       "method": "eth_getBlockByNumber",
//       "params": [
//         blk,
//         true
//       ],
//       "id": 1
//     }
//     const data2 = {

//       "jsonrpc": "2.0",
//       "method": "eth_getBlockTransactionCountByNumber",
//       "params": [
//         blk
//       ],
//       "id": 1
//     }
//     let blockData = await fetch("http://127.0.0.1:8545", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//     blockData = await blockData.json();
//     setblockdetails(blockData.result)
//     console.log("BDDDD",blockdetails);


//     let trans = await fetch("http://127.0.0.1:8545", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data2),
//     });
//     trans = await trans.json();
//     settransCount(trans.result);
//     setIsMounted(true)
//     // console.log(trans.result);

//   }}

//   // console.log(blockdetails);
//   if (isMounted) {
//     console.log(blockdetails.transactions[0]);
//     const transac = blockdetails.transactions[0];
//   }

//   // // const bata = blockdetails.transactions[0];
//   // // const batahash = bata.hash;
//   // // console.log(batahash);
//   // // console.log(bata[0].hash);
//   console.log(transCount);
//   const hexToDecimal = hex => parseInt(hex, 16);
//   const timestamp = hexToDecimal(blockdetails.timestamp);
//   const size = hexToDecimal(blockdetails.size);
//   const length = hexToDecimal(transCount);
//   const gas = hexToDecimal(blockdetails.gasUsed);
//   const diffi = hexToDecimal(blockdetails.difficulty);
//   const gasL = hexToDecimal(blockdetails.gasLimit);
//   const totDiffi = hexToDecimal(blockdetails.totalDifficulty);
//   // // const length = blockdetails.transactions.length;
//   // // console.log(tot);


//   return (
//     <div>
//       <h2>Block Details</h2>
//       <table className={styles.transmytable}>
//       <tr><td><p>Block Height:</p></td><td>{blk}</td></tr>
//       <tr><td><p>Block Hash:</p></td><td>{blockdetails.hash}</td></tr>
//       <tr><td><p>Block timestamp:</p></td>{timestamp}<td></td></tr>
//       <tr><td><p>Transactions:</p></td><td><Link to="/Transactions" state={blockdetails}>{length} </Link>transactions</td></tr>
//       <tr><td><p>Size:</p></td><td>{size}bytes</td></tr> 
//       <tr><td><p>Difficulty:</p></td><td>{diffi}</td></tr> 
//       <tr><td><p>Miner:</p></td><td>{blockdetails.miner}</td></tr> 
//       <tr><td><p>Gas:</p></td><td>{gas} Wei</td></tr> 
//       <tr><td><p>Gas Limit:</p></td><td>{gasL} Wei</td></tr> 
//       <tr><td><p>Nonce :</p></td><td>{blockdetails.nonce}</td></tr> 
//       <tr><td><p>Total Difficulty:</p></td><td>{totDiffi}</td></tr> 
//       <tr><td><p>Parent Hash:</p></td><td>{blockdetails.parentHash}</td></tr>
//       <tr><td><p>Receipts Root:</p></td><td>{blockdetails.receiptsRoot}</td></tr> 
//       <tr><td><p>State Root:</p></td><td>{blockdetails.stateRoot}</td></tr> 
//       <tr><td><p>Sha3Uncles:</p> </td><td>{blockdetails.sha3Uncles}</td></tr>
//       </table>

//      {/* <Link to="transactions">trr</Link> */}

//     </div>
//    )

}
export default TransLayout1;