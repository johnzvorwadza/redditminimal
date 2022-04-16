import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SidebarControls from './SidebarControls';

function Navbar() {
    const r = useSelector(state=>state.data.r);
    const dispatch =(data)=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        SidebarControls();
        dispatch2(data);
    } 
    const dispatch2 = useDispatch();

   
    return(<div className="nav">
        <h3>r/{r}</h3>
        <ul>
        <li><button onClick={()=>dispatch({"type":"setR",payload:"unitedkingdom"})}>United Kingdom</button></li>
            <li><button onClick={()=>dispatch({"type":"setR",payload:"pics"})}>Pics</button></li>
            <li><button onClick={()=>dispatch({"type":"setR",payload:"animals"})}>Animals</button></li>
            <li><button onClick={()=>dispatch({"type":"setR",payload:"dogs"})}>Dogs</button></li>
            <li><button onClick={()=>dispatch({"type":"setR",payload:"wildlife"})}>Wild Life</button></li>
        </ul>
    </div>)
}

export default Navbar