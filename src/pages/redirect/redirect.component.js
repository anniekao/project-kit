import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from "../../axios";
import {connect} from "react-redux"

const RedirectPage = ({user, location}) => {
    let currentLocation = {};
    const success = input => {
      currentLocation.longitude = input.coords.longitude
      currentLocation.latitude = input.coords.latitude
      return '';
    }

    const error = err => {
      console.log('something went wrong - ' + err);
    }

    (async () => {
      await navigator.geolocation.getCurrentPosition(success, error)
      if(currentLocation.longitude && currentLocation.latitude){
        let contact = await axios.post(`/${user.id}/contact/${location.contactId}`, {
          lat: currentLocation.latitude,
          long: currentLocation.longitude
        })
        if(contact.data){
          console.log('success' + contact.data)
        }
      }
    })()


return ''

  // get current location

  // post

  // redirect

  
}
const mapStateToProps = ({user}) => user



export default connect(mapStateToProps)(RedirectPage);