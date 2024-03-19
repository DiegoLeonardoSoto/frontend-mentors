type TImage = {
  img: string
  thumbnail: string
}

export type TProduct = {
  id: number
  brand: string
  title: string
  description: string
  price: number
  discountPercentage: number
  images: TImage[]
}
