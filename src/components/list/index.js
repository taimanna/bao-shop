import Product from "../product";

const products = [
  {
    name: "BAO BOOBA MOUSEPAD",
    price: "$45.00",
    src: "https://assets.bigcartel.com/product_images/320400357/Oppai.png?auto=format&fit=max&w=346",
  },
  {
    name: "FISH BOWL CHARM",
    price: "$12.00",
    src: "https://assets.bigcartel.com/product_images/320399451/charms.png?auto=format&fit=max&w=346",
  },
  {
    name: "SAILOR TSHIRT",
    price: "$40.00",
    src: "https://assets.bigcartel.com/product_images/320398917/TShirt+Design.png?auto=format&fit=max&w=346",
  },
  {
    name: "BAOBBLE BATH ENAMEL PIN",
    price: "$15.00",
    src: "https://assets.bigcartel.com/product_images/320400654/Enamel+Pin.png?auto=format&fit=max",
  },
  {
    name: "POSTER - NAIZOTAN",
    price: "$12.00",
    src: "https://assets.bigcartel.com/product_images/320400792/Poster+Design+naizotan.png?auto=format&fit=max",
  },
  {
    name: "FISH BOWL VINYL DECAL",
    price: "$10.00",
    src: "https://assets.bigcartel.com/product_images/320400876/Sticker+A.png?auto=format&fit=max",
  },
  {
    name: "BAOBBLE BATH VINYL DECAL",
    price: "$10.00",
    src: "https://assets.bigcartel.com/product_images/320400489/Sticker+B.png?auto=format&fit=max",
  },
  {
    name: "POSTER - YAMPA",
    price: "$12.00",
    src: "https://assets.bigcartel.com/product_images/320400840/Poster+Design+yampa.png?auto=format&fit=max",
  },
  {
    name: "POSTER - KANEKIRU",
    price: "$12.00",
    src: "https://assets.bigcartel.com/product_images/320400726/Poster+Design+kanekiru.png?auto=format&fit=max",
  },
];

const List = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center mx-auto max-w-[1100px] pb-[60px]">
        {products.map((product) => (
          <Product
            name={product.name}
            price={product.price}
            src={product.src}
          />
        ))}
      </div>
    </>
  );
};

export default List;
