import Cart from './Compenents/Cart'
import Product from './Compenents/Product'
import products from './products.json'

function App() {
  // console.log(products)

  return (
    <>
      <div className="App">
        <Cart />
        <div className="products" style={{display: "flex", flexWrap: "wrap"}}>
          {products.map((product) => 
           ( <Product {...product} />)
          )}
        </div>
      </div>
    </>
  )
}

export default App
