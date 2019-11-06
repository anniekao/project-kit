import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import Container from '@material-ui/core/Container';

import { updateUser } from '../../redux/actions/userAction';

const Profile = ({ user, users, updateUser }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [bio, setBio] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const currentUser = users.filter(u => u.id === user.id)[0];
    
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
      updateUser(user.id, profileObj)
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

    return (
    <Container>
      <div>
        <p>Name: {currentUser.first_name + " " + currentUser.last_name}</p>
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
        <p>{currentUser.bio}</p>
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
        <p>Occupation: {currentUser.occupation}</p>
        <TextField
          id="outlined-basic"
          value={occupation}
          onChange={({target}) => setOccupation(target.value)} 
          label="Occupation"
        />
      </div>   
      <div>
        <p>Company: {currentUser.company} </p>
        <TextField
          id="outlined-basic"
          value={company}
          onChange={({target}) => setCompany(target.value)}
          label="Company"
        />
      </div>
      <div>
        <p>Email: {currentUser.email}</p>
        <TextField
          id="outlined-basic"
          value={email}
          onChange={({target}) => setEmail(target.value)}
          label="Email"
        />
      </div>
      <div>
        <p>Phone: {currentUser.phone}</p>
        <TextField
          id="outlined-basic"
          value={phone}
          onChange={({target}) => setPhone(target.value)}
          label="Phone"
        />
      </div>
      <button onClick={handleUpdate}>Update Profile</button>
     </Container>

  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    user: state.user
  }
}

const mapDispatchToProps = {
  updateUser
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)