import React from 'react'

const AddAddress = ({method,onTypeChange}) => {
    return (
        <div className='pop-up'>
            <div
                className='addAddress'>
            <h2 className='h2-heading'>{`Add Address`}</h2>
            </div>

        <div className='addAddress'>
            <h4 >C-290, 5th Down Street, Manchester, Uk</h4>
        </div>
<div className='radio-box'>
        <input type='radio' id='' value={''} checked={method?.type==''} onChange={(e)=>{onTypeChange(e)}}/>
        <label for=''>{`Set Billing Address`}</label>
        </div>


        <div className='radio-box'>
            <input type='radio' id='' value={''} checked={method?.type==''} onChange={(e)=>{onTypeChange(e)}}/>
            <label for=''>{`Set Shipping Address`}</label>
            </div>
            <div className='addAddress'>
            <h4 >E/90, 15th Down Stree, South Bay Manchester, UK </h4>
        </div>
        <div className='radio-box'>
        <input type='radio' id='' value={''} checked={method?.type==''} onChange={(e)=>{onTypeChange(e)}}/>
        <label for=''>{`Set Billing Address`}</label>
        </div>
        <div className='radio-box'>
            <input type='radio' id='' value={''} checked={method?.type==''} onChange={(e)=>{onTypeChange(e)}}/>
            <label for=''>{`Set Shipping Address`}</label>
            </div>
            <div className='addAddress'>
            <h4 >1245, Foxbay area, 54th new street, Hampshire,  UK 89271 </h4>
        </div>
        <div className='radio-box'>
        <input type='radio' id='' value={''} checked={method?.type==''} onChange={(e)=>{onTypeChange(e)}}/>
        <label for=''>{`Set Billing Address`}</label>
        </div>
        <div className='radio-box'>
            <input type='radio' id='' value={''} checked={method?.type==''} onChange={(e)=>{onTypeChange(e)}}/>
            <label for=''>{`Set Shipping Address`}</label>
            </div>

            <div>
        <button className='button'>{`Set Address`}</button>
        </div>



            
    </div>
    )
}
export default AddAddress;