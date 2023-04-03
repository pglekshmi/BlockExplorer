import {Link,Outlet} from "react-router-dom";
import Table from "./Table";


export default function RootLayout(){
    return(
        <div>
            <h1>BlockExplorer</h1>
            <Link to="/">Home</Link>
            
            <Outlet />
            {/* <Table /> */}
        </div>
    )
}