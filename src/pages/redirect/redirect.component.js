import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from "../../axios";
import {connect} from "react-redux"

const RedirectPage = ({id, location}) => {
    let currentLocation = {};
    let contact = {}
    const success = input => {
      console.log(input)
      const contactId = location.pathname.split('qr-code/')[1];
      currentLocation.longitude = input.coords.longitude;
      currentLocation.latitude = input.coords.latitude;


      // console.log('current location is ' + JSON.stringify(location) )
      // let contact = await axios.post(`/${id}/contact/${location.contactId}`, {
      (async () => {
        try {
          contact = await axios.post(`/users/${id}/contacts/${contactId}`, {
            lat: currentLocation.latitude,
            long: currentLocation.longitude
          })
          if(contact.data){
            console.log('success' + contact.data)
          }
          return true;
          
        } catch (error) {
          console.log(error)
        }

        })()
        
        // await axios.post(`/${id}/contacts/${contactId}`, {
        //   lat: currentLocation.latitude,
        //   long: currentLocation.longitude
        // })
        return false
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