import React from 'react'
import  Alert from 'react-bootstrap/Alert'

const Cart = () => {
  return (
    <Alert className='w-' variant={"success"}>
      <h3 className='text-center'>Total Items: 5 (Rs. 3,000)/-</h3>
    </Alert>
  )
}

export default Cart
