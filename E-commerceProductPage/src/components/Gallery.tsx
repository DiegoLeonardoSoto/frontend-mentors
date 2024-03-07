import product from '../mock/product.json'

export const Gallery = () => {
  return (
    <div className="w-2/5 grid gap-8">
      <div>
        <img
          className="h-auto max-w-full rounded-2xl"
          src={product.images[0].img}
          alt=""
        />
      </div>

      <div className="grid grid-cols-4 gap-8">
        {product.images.map(({ thumbnail }) => (
          <img
            className="h-auto max-w-full rounded-2xl"
            key={crypto.randomUUID()}
            src={thumbnail}
            alt=""
          />
        ))}
      </div>
    </div>
  )
}
