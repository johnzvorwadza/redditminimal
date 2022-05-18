import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setS } from '../redux/reducers/MainReducer';
import '../styles/Header.css';


const Header =()=>{
    const dispatch = useDispatch();
    const r = useSelector(state=>state.data.r);

const [searcvalue, setSearchValue] = useState("");

    function search(v){
        dispatch({"type":"setS",payload:v});
    }

    
return(<div className='header'>
    <div className='centerMax1000'>
<h3 className='logo'>Reddit Minimal</h3>
<div>
    <input  className='search' onKeyUp={(e) => search(e.target.value)}  type="text" placeholder={`search r/${r}`}/></div>
</div>
</div>)
}
export default Header