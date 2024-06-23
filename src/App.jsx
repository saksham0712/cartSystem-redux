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
            
            // <div key={product.id}>{product.productName}</div>
            <Product {...product} />
            // console.log(product.id)
            // <Product  />
          )}
        </div>
      </div>
    </>
  )
}

export default App
