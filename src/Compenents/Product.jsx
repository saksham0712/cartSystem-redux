import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Product = (props) => {
  // console.log(props)
  // alert("ped is rendered")
  return (
    <Card key={props.id} style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant='top' src={props.image} alt={props.productName} />
      <Card.Body>
        <Card.Title>{props.productName}</Card.Title>
        <Card.Text>{props.price}</Card.Text>
        <Button variant='primary'>Add to cart</Button>
      </Card.Body>
    </Card>
  )
}

export default Product
