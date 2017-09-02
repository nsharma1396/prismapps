import React from 'react';
import './Bar.css'
import logo from './logo.png'
export default(props) => {
	if(props.status==="success")
		return(
			<div className="container">
				<img src={logo} alt="logo" width="24px" height="24px"/>
				<p style={{fontSize:'20px',color:'white'}}>My Apps</p>
			</div>
		);
	else
		return(
			<div></div>
			)
	}