import React, { useState } from 'react'
import './style.css'
import AddressBox from './AddressBox'

export default function AddressDetails({openPopUp}) {
   const [userAddress,setUserAddres]= useState([
    {
        houseNo: 'c-290',
        street: 'Foxbay Area',
        city: 'manchester',
        country : 'UK',
        zipCode : '89721',
        addressType: 'billing'
    },
    {
        houseNo: 'c-285',
        street: 'Fox Area',
        city: 'manchester',
        country : 'UK',
        zipCode : '89721',
        addressType: 'shipping'
    }
   ])
  return (
    <div className='address-wrapper'>
        <h2 className='h2-heading'>{`Customer Details`}</h2>
        {userAddress && userAddress.map(item=>(<AddressBox address={item} openPopUp={openPopUp}/>))}
        <div class='new-address' onClick={()=>{openPopUp()}}>{`+ ADD NEW ADDRESS`}</div>
    </div>
  )
}