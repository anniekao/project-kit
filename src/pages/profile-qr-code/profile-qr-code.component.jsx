import React from 'react';

const QRCode = require('qrcode.react');

const ProfileQR = ({userId}) => {
  const styles = {
    container: {
      minHeight:"100%",
      backgroundColor:"#40bcd8",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
    }
  }

  return (
    <div style={styles.container}>
      <div>
        <QRCode value={`http://localhost:3000/profile/${userId}`} size={300} />  
      </div>
    </div>
  )
}

export default ProfileQR;