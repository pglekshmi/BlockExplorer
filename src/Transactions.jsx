import { Outlet ,Link,useLocation} from "react-router-dom";

function Transactions(props){
    const location = useLocation();
    const propsData = location.state;
     console.log(propsData.transactions[0].hash)
     const para ={
        d1:"propsData.transactions[0].hash"
     }
    return(
        <div>
           <table>

           <tr>
              <th>Transaction Hash</th>

           </tr>
           <tr>
            <td><Link to="/transdetails" state={propsData.transactions}>{propsData.transactions[0].hash}</Link></td>
           </tr>
        
           
          </table>
        </div>
    );
}
export default Transactions;