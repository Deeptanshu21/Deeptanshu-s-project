import './App.css';
import { useEffect, useState } from 'react';
import AddressDetails from './component/AddressDetails';
import Payment from './component/Payment';
import Header from './component/Header';
import MyOrders from './component/MyOrders';
import AddAddress from './component/AddAddress';



function App() {
  const [payment,setPayment]=useState({
    type:'card',
    cardNumber:'',
    validDate : {
      month:'',
      year:2000
    },
    CVV:''

  })

  const [open,setOpen]=useState(false)
  const [myOrders,setMyOrders]=useState([
    {
      name:'demin pro jacket',
      size:'xl',
      color:'blue',
      qty:1,
      price:64
    },
    {
      name:'Sporty jacket',
      size:'xl',
      color:'black',
      qty:2,
      price:70
    }
  ])
  const onTypeChange=(e)=>{
    var tempPay={...payment};
    tempPay.type=e.target.value
    setPayment(tempPay)

  }

  const onValueChange=(e,type)=>{
    var tempPay={...payment};
    if(type=='card')
    tempPay.cardNumber=e.target.value.length<=16? e.target.value:tempPay.cardNumber
    if(type=='cvv')
    tempPay.CVV=e.target.value.length<=3? e.target.value:tempPay.CVV;
    setPayment(tempPay)
  }

console.log(payment)

const openPopUp=()=>{
  setOpen(!open)

}
return (

<div className="App">
  <Header/>
      
  <div className='container'>
        <div>
          <AddressDetails openPopUp={openPopUp}/>
          <Payment method={payment} onTypeChange={onTypeChange} onValueChange={onValueChange}/>
        </div>
        <div>
          <MyOrders orders={myOrders}/>
        </div>
      </div>
      {open &&<AddAddress/>}
      {open && <button className='cross-button' onClick={()=>{openPopUp()}}>X</button>}
    </div>
    
);
}

export default App;
