import React from 'react';
import { Redirect } from 'react-router-dom';
import axios, { setAuthHeader } from "../../axios";
import {connect} from "react-redux"

const RedirectPage = ({id, location, history, token}) => {
    let currentLocation = {};
    let contact = {}
    const success = input => {
      console.log(input)
      const contactId = location.pathname.split('qr-code/')[1];
      currentLocation.longitude = input.coords.longitude;
      currentLocation.latitude = input.coords.latitude;

      (async () => {
        try {
          setAuthHeader(token)
          contact = await axios.post(`/users/${id}/contacts/${contactId}`, {
            lat: currentLocation.latitude,
            long: currentLocation.longitude
          })
          if(contact.status === 200){
            console.log('success', contact)
            history.push(`/events/${contact.data.user_event_id}/contacts`)
          }
          return true;
          
        } catch (error) {
          console.log(error)
        }

        })()
        
        return false
    }

    const error = err => {
      console.log('something went wrong - ' + err);
    }
    navigator.geolocation.getCurrentPosition(success, error);


return ''
  
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    token: state.token
  }
}



export default connect(mapStateToProps)(RedirectPage);