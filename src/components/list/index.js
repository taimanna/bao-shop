import Product from '../product'
import products from '../../assets/images/products'

const productDetails = [
  {
    name: 'BAO BOOBA MOUSEPAD',
    price: '$45.00',
    src: products.mousepad,
  },
  {
    name: 'FISH BOWL CHARM',
    price: '$12.00',
    src: products.charms,
  },
  {
    name: 'SAILOR TSHIRT',
    price: '$40.00',
    src: products.tShirt,
  },
  {
    name: 'BAOBBLE BATH ENAMEL PIN',
    price: '$15.00',
    src: products.enamelPin,
  },
  {
    name: 'POSTER - NAIZOTAN',
    price: '$12.00',
    src: products.posterNaizotan,
  },
  {
    name: 'FISH BOWL VINYL DECAL',
    price: '$10.00',
    src: products.stickerA,
  },
  {
    name: 'BAOBBLE BATH VINYL DECAL',
    price: '$10.00',
    src: products.stickerB,
  },
  {
    name: 'POSTER - YAMPA',
    price: '$12.00',
    src: products.posterYampa,
  },
  {
    name: 'POSTER - KANEKIRU',
    price: '$12.00',
    src: products.posterKanekiru,
  },
]

const List = () => {
  return (
    <>
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 pb-[60px] md:grid-cols-2 lg:grid-cols-3">
        {productDetails.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            price={product.price}
            src={product.src}
          />
        ))}
      </div>
    </>
  )
}

export default List
