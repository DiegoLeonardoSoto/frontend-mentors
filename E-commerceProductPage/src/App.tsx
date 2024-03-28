import { Navbar } from './components/Navbar'
import { Product } from './components/Product'
import { CartProvider } from './context/cartContext/CartProvider'

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-5xl h-screen">
        <CartProvider>
          <Navbar />
          <Product />
        </CartProvider>
      </div>
    </div>
  )
}

export default App
