import React from 'react';
import { useSelector } from 'react-redux';
const Footer =()=>{
    const username = useSelector(state=>state.user);
return(<div className='footer'>
<p>&copy;johncode.co.uk</p>

</div>)
}
export default Footer