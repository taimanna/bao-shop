const Product = ({ name, price, src }) => {
  return (
    <div className="">
      <a href="/" className="hover:text-5b8 hover:opacity-95">
        <div className="px-[8px] py-[16px]">
          <img
            className="h-[450px] w-[450px] rounded-[4px] object-cover md:h-[340px] md:w-[340px]"
            alt={name}
            src={src}
          />
        </div>

        <div className="px-[8px] pb-[16px]">
          <h1 className="text-center font-varela text-[18px] tracking-[2px]">
            {name}
          </h1>
          <div className="m-auto h-[1px] w-[20px] translate-y-[6px] bg-black"></div>
          <h2 className="mt-[16px] text-center font-lato text-[16px] tracking-[2px]">
            {price}
          </h2>
        </div>
      </a>
    </div>
  )
}

export default Product
