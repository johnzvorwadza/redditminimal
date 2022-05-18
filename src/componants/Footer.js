import React from 'react';
import { useSelector } from 'react-redux';
const Footer =()=>{
    const username = useSelector(state=>state.user);
return(<div className='footer'>
<p><a className='footerlink'  href='https://johncode.co.uk'>&copy;johncode.co.uk</a></p>

</div>)
}
export default Footer