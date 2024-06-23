import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { addItem } from './redux/slices/cartSlice'

const Product = (props) => {
  const dispatch = useDispatch() 
  // console.log(props)
  // alert("ped is rendered")
  return (
    <Card key={props.id} style={{ width: "15rem", margin: "10px" }}>
      <Card.Img variant='top' src={props.image} alt={props.productName} />
      <Card.Body>
        <Card.Title>{props.productName}</Card.Title>
        <Card.Text>Rs.{props.price}/-</Card.Text>
        <Button onClick={e=> dispatch(addItem({ name: props.productName, price: props.price }))} variant='primary'>Add to cart</Button>
      </Card.Body>
    </Card>
  )
}

export default Product
