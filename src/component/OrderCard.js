import React from 'react'

export default function OrderCard({order}) {
  return (
    <div className='order-card'>
        <img style={{height:'100%'}} src={''}/>
        <div>
            <h3>{order.name}</h3>
            <div className='inline-box'>
                <p >{`Size: ${order.size}`}</p>
                <p>{`Color :${order.color}`}</p>
            </div>
            <div className='inline-box'>
                <p>{ `$ ${order.price}`}</p>
                <p>{ `Qty: ${order.qty}`}</p>
            </div>

        </div>
    </div>
  )

  }