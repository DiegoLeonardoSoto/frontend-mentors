import { Navbar } from './components/Navbar'
import { Product } from './components/Product'

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-5xl h-screen">
        <Navbar />
        <Product />
      </div>
    </div>
  )
}

export default App
