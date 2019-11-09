import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from "../../axios";
import {connect} from "react-redux"

const RedirectPage = ({user, location}) => {
    let currentLocation = {};
    const success = async input => {
      console.log(input)
      currentLocation.longitude = input.coords.longitude
      currentLocation.latitude = input.coords.latitude

      let contact = await axios.post(`/${user.id}/contact/${location.contactId}`, {
          lat: currentLocation.latitude,
          long: currentLocation.longitude
        })

                if(contact.data){
          console.log('success' + contact.data)
        }
      return 'success';
    }

    const error = err => {
      console.log('something went wrong - ' + err);
    }
    navigator.geolocation.getCurrentPosition(success, error);
    // (async () => {
    //   let succ = await navigator.geolocation.getCurrentPosition(success, error)
    //   if(succ){
    //     console.log('fwafjojfawpojfopawjfopajwpofjawpoj' +  JSON.stringify(currentLocation))   
    //   }
     
    //   if(currentLocation.longitude && currentLocation.latitude){
    //     let contact = await axios.post(`/${user.id}/contact/${location.contactId}`, {
    //       lat: currentLocation.latitude,
    //       long: currentLocation.longitude
    //     })
    //     if(contact.data){
    //       console.log('success' + contact.data)
    //     }
    //   }
    // })()


return ''

  // get current location

  // post

  // redirect

  
}
const mapStateToProps = ({user}) => user



export default connect(mapStateToProps)(RedirectPage);