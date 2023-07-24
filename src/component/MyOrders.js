import React from 'react'
import OrderCard from './OrderCard'

export default function MyOrders({orders}) {
    const total = orders.reduce(
        (accumulator, currentValue) => accumulator + (currentValue.qty*currentValue.price),
        0
      );
      return (
        <div className='order-segment'>
            <h2 className='h2-heading'>My Orders</h2>
            {orders.map(item=>{
                return(<OrderCard order={item}/>)
            })}
            <div className='additional-charges-box'>
            <p>{`Delivery Charges`}</p>
            <p>{'$10 Express Delivery'}</p>
            <p>{`Coupon discount`}</p>
            <p>{`$0 No Coupon avilable`}</p>
        </div>

        <div className='total-payment'>
            <h3>{`Total Payment`}</h3>
            <h3>{`$ ${total}`}</h3>
        </div>

        </div>
  )
}