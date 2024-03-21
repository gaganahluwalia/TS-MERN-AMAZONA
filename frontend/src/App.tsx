import './App.css'
import { sampleProducts } from './data'

function App() {
  return (
    <div>
      <header>TS Amazona</header>
      <main>
        <ul>
          {sampleProducts.map(product => (
            <li>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2>{product.name}</h2>
            </li>
          ))}
        </ul>
      </main>
      <footer>All rights reserved</footer>
    </div>
  )
}

export default App
