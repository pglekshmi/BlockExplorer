import {Link,Outlet} from "react-router-dom";
import Table from "./Table";


export default function RootLayout(){
    const myStyle={
        padding:'1020px'
    };
    return(
        <div>
            <div>
            <h1>BlockExplorer</h1>
            
            <Link to="/" style={myStyle}>Home</Link></div>
            
            <Outlet />
            {/* <Table /> */}
        </div>
    )
}