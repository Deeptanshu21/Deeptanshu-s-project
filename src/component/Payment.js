import React, { useState } from 'react'

export default function Payment({method,onTypeChange,onValueChange}) {
    const [month,setMonth]=useState(['MMM','JAN','FEB','MAR'])
    const [year,setYear]=useState(['YYYY','2023','2024','2025'])

  return (
    <div className='payment-wrapper'>
    <div className='heading-bar'>{'PAYMENT METHOD'}</div>
    <div className='radio-box'>
    <input type='radio' id='card-type' value={'card'} checked={method.type=='card'} onChange={(e)=>{onTypeChange(e)}}/>
    <label for='card-type'>{`Debit/Credit card`}</label>
    </div>
    <div className='payment-details-wrapper'>
    <div className='payment-details-heading'>{`Card Number *`}</div>
    <input className='input' type='number' maxLength='16' value={method.cardNumber} onChange={(e)=>{onValueChange(e,'card')}}></input>
    </div>
    <div className='flex-row row-40'>
        <div className='payment-details-wrapper'>
            <div className='payment-details-heading'>{`Valid Date *`}</div>
                <div className='flex-row row-10'>
                <select name='month' className='input' onChange={(e)=>{onValueChange(e,'month')}}>
                {month.map(item=>(
                    <option value={item}>{item}</option>
                ))}
                </select>
                <select name='year' className='input' onChange={(e)=>{onValueChange(e,'year')}}>
                {year.map(item=>(
                    <option value={item}>{item}</option>
                ))}
                </select>
                </div>
            </div>
            <div className='payment-details-wrapper'>
            <div className='payment-details-heading'>{`CVV *`}</div>
            <input className='input' type='password' value={method.CVV} onChange={(e)=>{onValueChange(e,'cvv')}}></input>

        </div>
        <button className='button'>{`pay $120`}</button>
        </div>
    <div className='radio-box'>
    <input type='radio' id='net-banking-type' value={'netBanking'} checked={method.type=='netBanking'} onChange={(e)=>{onTypeChange(e)}}/>
    <label for='net-banking-type'>{`Net Banking`}</label>
    </div>
    <div className='radio-box'>
    <input type='radio' id='gpay-type' value={'wallet'} checked={method.type=='wallet'} onChange={(e)=>{onTypeChange(e)}}/>
    <label for='gpay-type'>{`gpay/wallet`}</label>
    </div>
    </div>
  )
}