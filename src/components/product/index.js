import "./style.css";
const Product = ({ name, price, src }) => {
  return (
    <div className="w-1/3">
      <a href="/" className="hover:text-5b8">
        <div className="flex justify-center px-[8px] py-[16px]">
          <img
            className="h-[340px] w-[340px] rounded-[4px] object-cover hover:opacity-95"
            alt={name}
            src={src}
          />
        </div>

        <div className="px-[8px] pb-[16px]">
          <h1 className="text-center font-varela text-[18px] tracking-[2px]">
            {name}
          </h1>
          <div className="m-auto h-[1px] w-[20px] translate-y-[6px] bg-black "></div>
          <h2 className="mt-[16px] text-center font-lato text-[16px] tracking-[2px]">
            {price}
          </h2>
        </div>
      </a>
    </div>
  );
};

export default Product;
