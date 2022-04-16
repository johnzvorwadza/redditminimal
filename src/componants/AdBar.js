import React from 'react';
import '../styles/AdBar.css';
import image from '../files/images/johnzvorwadza.png';

function AdBar() {
  return (
      <a className="adbarlink" target="_blank" href="https://johncode.co.uk">
    <div className='adbar'>
        <div className='adbarheader'>
            <span className='adbarlabel'>suggested</span>
            <h3 className='title'>Full-stack developer</h3>

        </div>
        <div className='adbarmain'>
          <img src={image}/>  
        </div>
        
        <div className='adbarfooter'>
            <p>Are you looking for a web&nbsp;developer?<br/>........</p>
            <span className='adbarurl'>Johncode.co.uk</span>
        </div>
    </div>
    </a>
  )
}

export default AdBar