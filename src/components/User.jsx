import React from 'react';
 import '../index.css';
const User = () => {
    const user = localStorage.getItem('user');
  return (
    <div style={{backgroundColor:'black',height:'93vh'}}>
      <div className="container" >
        <h1 style={{textAlign:'center',color:'white'}}>User Info</h1>
        <div className="d-flex justify-content-center" style={{marginTop:'4rem'}}>
        <div className="usercard">
  <div className="usercard2">
    <h3 style={{color:'white',textAlign:'center'}}>User</h3>
    <hr />
    <p style={{color:'white',textAlign:'center'}}>Email:{user}</p>
  </div>
  <p style={{color:'white'}}><strong>Hover me to show effect</strong></p>
</div>
        </div>
      </div>
    </div>
  )
}

export default User
