import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';

import QrReader from 'react-qr-reader';

const ProfileScanner = () => {
  const [redirect, setRedirect] = useState(false);
  const [url, setUrl] = useState(null);
  
  

  const handleError = (err) => {
    console.error(err)
  }
  

  // const handleScan = (data) => {
  //   if (data) {
  //     const contactId = data.split('qr-code/')[1];
  //     setUrl(contactId)
  //     setRedirect(true)
  //   }
  // }


  return (
    <div style={{height:"100%"}}>
      <QrReader
        delay={300}
        onError={handleError}
        // onScan={handleScan}
        style={{width:"100%"}}
      />
      <Redirect to={{
          pathname: `/qr-code/8`,
          contactId: 8
        }} /> 
      {/* {redirect ? <Redirect to={{
          pathname: `/qr-code/${url}`,
          contactId: url
        }} /> : ''} */}
    </div>
  )
}

export default ProfileScanner;