import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import Cookies from 'js-cookie';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';

import ProfileQR from '../profile-qr-code/profile-qr-code.component';
import ProfileScanner from '../profile-scanner/profile-scanner.component';

import { updateUser } from '../../redux/actions/userAction';

const Profile = ({ user, updateUser, token }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [bio, setBio] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  const handleUpdate = () => {
    const profileObj = {
      first_name: firstName,
      last_name: lastName,
      occupation,
      bio,
      company,
      email,
      phone,
    }

    // remove blank entries from profileObj
    for (let ele in profileObj) {
      if (profileObj[ele] === '' || profileObj[ele] === undefined) {
        delete profileObj[ele]
      }
    }

    // const token = async () => await Cookies.get(token)
    updateUser(user.id, profileObj, token)
    clearForm()
  }

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setOccupation('');
    setBio('');
    setCompany('');
    setEmail('');
    setPhone('');
  }

  const styles = {
    slideContainer: {
      height: "100%"
    },
    slide: {
      minHeight:100
    }
  }

  return (  
    <SwipeableViews>
      <div>
        <div>
          <p>Name: {user.first_name + " " + user.last_name}</p>
          <TextField
            id="outlined-basic"
            value={firstName}
            onChange={({target}) => setFirstName(target.value)} 
            label="First Name"
          />
          <TextField
            id="outlined-basic"
            value={lastName}
            onChange={({target}) => setLastName(target.value)}
            label="Last Name"
          />
        </div>
        <div>
          <p>{user.bio}</p>
          <TextField
            id="outlined-basic"
            multiline
            rows={2}
            rowsMax={3}
            value={bio}
            onChange={({target}) => setBio(target.value)} 
            label="Bio"
          />
        </div>   
        <div>
          <p>Occupation: {user.occupation}</p>
          <TextField
            id="outlined-basic"
            value={occupation}
            onChange={({target}) => setOccupation(target.value)} 
            label="Occupation"
          />
        </div>   
        <div>
          <p>Company: {user.company} </p>
          <TextField
            id="outlined-basic"
            value={company}
            onChange={({target}) => setCompany(target.value)}
            label="Company"
          />
        </div>
        <div>
          <p>Email: {user.email}</p>
          <TextField
            id="outlined-basic"
            value={email}
            onChange={({target}) => setEmail(target.value)}
            label="Email"
          />
        </div>
        <div>
          <p>Phone: {user.phone}</p>
          <TextField
            id="outlined-basic"
            value={phone}
            onChange={({target}) => setPhone(target.value)}
            label="Phone"
          />
        </div>
        <button onClick={handleUpdate}>Update Profile</button>
      </div>
      <div style={{height:"100%"}}>
        <ProfileQR userId={user.id} />
      </div>
      <div style={{height:"100%"}}>
        <ProfileScanner />
      </div>
    </SwipeableViews>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    token: state.token
  }
}

const mapDispatchToProps = {
  updateUser
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)