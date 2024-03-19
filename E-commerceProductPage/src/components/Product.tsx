import { LightboxProvider } from '../context/LightboxProvider'
import product from '../mock/product.json'
import { Gallery } from './Gallery'
import { Lightbox } from './Lightbox'
import { ProductContent } from './ProductContent'

export const Product = () => {
  return (
    <main className="flex px-10 mt-24 justify-between items-center">
      <LightboxProvider>
        <Gallery />
        <ProductContent {...product} />
        <Lightbox />
      </LightboxProvider>
    </main>
  )
}
