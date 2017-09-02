import React from 'react'
import './square.css'
import logo from './logo.png'


export default (props) => {
    if(props.status==="loading")  
    return (
      <div className="bod">
          <img alt="Logo" className="logo" src={logo}/>
      </div>
    );
    else if(props.status==="error")
    return (
      <div>
        <div style={{marginTop:'100px',textAlign:'Center',fontSize:'200%'}}>
        	<h1><b>404!</b></h1>
        </div>
        <div style={{marginTop:'50px',textAlign:'Center',fontSize:'150%'}}>
          <div >
            <h1>The change you wanted was rejected.</h1>
            <p>Maybe you tried to change something you didn't have access to.</p>
          </div>
          <p>If you are the application owner check the logs for more information.</p>
        </div>
      </div>
    );
    else
    return (
      <div className="body">
          <div style={{display:"flex"}} >
          	{props.data.map((elem) => {
              return (
                <button type="button" key={elem.id} className="square" style={{textAlign:'left'}}>
                  <div>
                    <img alt="Logo" style={{width:'100px',height:'100px'}} src={elem.logo.url} />
                  </div>
                  <div>
                    <p style={{fontSize:'1.25em',fontVariant:'small-caps',color:'black'}}>{elem.name}</p>
                    <p style={{marginTop:'10px',fontSize:'10px',color:'grey'}}>By {elem.developer.username}</p>
                  </div>
                </button>
              );            
            })}
        </div>
      </div>
	);
}