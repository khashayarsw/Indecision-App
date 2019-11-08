import React from 'react';
const Headers = (props)=>(
        <div className='header'>
          <div className="container">
             <h1 className='header_h1'>{props.firstTitle}</h1>
             <h2 className='header_h2'>{props.secondTitle}</h2>
          </div>
        </div>
     );
Headers.defaultProps = {
    firstTitle:'Indecision',
    secondTitle:'Put your life in the hands of a computer '
}
export default Headers;