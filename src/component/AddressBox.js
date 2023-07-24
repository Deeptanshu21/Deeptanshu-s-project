import React from 'react'
import './style.css'

export default function AddressBox({address,openPopUp}) {
  console.log(address)
    return (
    <div className='address-box'>
    <div className='details'>
    <h3>{address.addressType=='billing'? 'Billing Address':'Shipping Address'}</h3>
    <p>{address.houseNo}, {address.street},{address.city},{address.country}</p>
    </div>
    <button className='button' onClick={()=>{openPopUp()}}>CHANGE</button>
    </div>

  )
}