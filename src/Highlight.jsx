import React  from "react";
import background from './background.jpg'
import Table from "./Table";

function Highlight(){
    const myStyle={
        backgroundImage:`url(${background})`,
       height:'50vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize :'1300px 300px',
                
                };
    const myFont={
        color:'white',
        paddingLeft:'100px',
        paddingTop:'50px',
    }
    return (
        <div>
    <div style={myStyle}>
        <h3 style={myFont} > Block Explorer for Ethereum</h3>
    
        </div>
        <Table />
    </div>

    )
}

export default Highlight;