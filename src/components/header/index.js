const options = ['Products', 'About', 'FAQ', 'Contact', 'Cart']

const Header = () => {
  return (
    <div className="mx-auto">
      <div className="mt-[86px] mb-[55px] text-center">
        <a href="/" className="inline-block">
          <img
            className=""
            alt="logo"
            src="https://assets.bigcartel.com/theme_images/70145577/Fish-Shop+Logo.png?auto=format&fit=max&h=200&w=1068"
          />
        </a>
      </div>

      <div>
        <ul className="mb-[25px] text-center text-555">
          {options.map((option, index) => (
            <li
              key={index}
              className="inline-block p-[8px] font-varela text-[14px] font-bold uppercase tracking-[1px] hover:text-5b8"
            >
              <a href="/" className="p-[8px]">
                {option}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-[85px] text-center">
        <img
          className="inline-block rounded-[5px]"
          alt="wallpaper"
          src="https://assets.bigcartel.com/theme_images/76066857/BaoRoll_28.12.png?auto=format&fit=max&w=1068"
        />
      </div>
    </div>
  )
}

export default Header
