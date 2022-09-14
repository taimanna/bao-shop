const options = ['Home', 'Products', 'About', 'FAQ', 'Contact', 'Cart']

const Footer = () => {
  return (
    <div className="mx-auto flex max-w-[1100px] flex-col pb-[40px]">
      <div className="h-[1px] w-[720px]  lg:w-[1100px] bg-black mx-auto"></div>
      <ul className="mb-[24px] flex justify-center pt-[40px]">
        {options.map((option, index) => {
          return (
            <li
              key={index}
              className="font-[15px] inline-block py-[8px] px-[16px] font-varela hover:text-5b8 hover:underline"
            >
              <a href="/">{option}</a>
            </li>
          )
        })}
      </ul>

      <ul className="mx-[24px] flex justify-center">
        <li className="py-[8px] px-[16px]">
          <a className="hover:text-5b8" href="https://twitter.com/baovtuber">
            <svg
              height="26px"
              width="26px"
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path>
            </svg>
          </a>
        </li>
        <li className="py-[8px] px-[16px]">
          <a className="hover:text-5b8" href="https://www.twitch.tv/baoo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26px"
              height="26px"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"></path>
              <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"></path>
            </svg>
          </a>
        </li>
        <li className="py-[8px] px-[16px]">
          <a
            className="hover:text-5b8"
            href="https://www.youtube.com/c/baovtuber"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26px"
              height="26px"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
