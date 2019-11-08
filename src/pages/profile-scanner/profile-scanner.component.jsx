import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';

import QrReader from 'react-qr-reader';

const ProfileScanner = () => {
  // const [result, setResult] = useState('No result');

  const handleError = (err) => {
    console.error(err)
  }

  const handleScan = (data) => {
    if (data) {
      return <Redirect exact path="/profile/${data.id}" />
    }
  }

  return (
    <div style={{height:"100%"}}>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{width:"100%"}}
      />
    </div>
  )
}

export default ProfileScanner;