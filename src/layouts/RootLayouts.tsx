import { NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/logo.svg";

import { useLocation } from "react-router-dom";

function RootLayouts() {
  const location = useLocation();

  const checkCurrentLink = () => {
    let classNames = "";
    if (location.pathname === "/" || location.pathname === "/our-business") {
      classNames += " text-[#000000]";
    } else {
      classNames += " text-white";
    }
    return classNames;
  };

  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About us",
      link: "/about-us",
    },
    {
      title: "Our Business",
      link: "/our-business",
    },
    {
      title: "Our Products",
      link: "/our-products",
    },
    {
      title: "Careers",
      link: "/careers",
    },
  ];

  return (
    <>
      <nav className="px-6 pt-8 lg:pt-0 lg:px-16 bg-transparent  container mx-auto flex items-center space-x-64 transform absolute w-full  lg:translate-y-10">
        <div className="flex items-center justify-between w-full lg:w-[171px]">
          <img
            src={Logo}
            className="max-h-[24px] lg:max-h-[49px]"
            alt={"white crust"}
          />

          <svg
            className={
              location.pathname === "/" || location.pathname === "/our-business"
                ? "text-black block lg:hidden"
                : "text-white block lg:hidden"
            }
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
            />
          </svg>
        </div>
        <ul className="hidden lg:flex lg:items-center lg:space-x-8 w-full">
          {links.map((items, index) => {
            return (
              <li key={index}>
                <NavLink className={checkCurrentLink()} to={items.link}>
                  {items.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <main>
      <Outlet />

      <div className="px-4 lg:px-24 pt-12">
        <div className="mt-5">
          <h4 className="font-bold text-[32px] ">Contact Us</h4>
          <h1 className="text-[32px] lg:text-[64px] font-extrabold ">
            Get in touch
          </h1>
          <p className="font-bold text-[16px] my-3 lg:my-0 lg:text-[20px]  lg:w-1/2">
            For further information you can message us directly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 place-content-center lg:gap-x-16">
          <form className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 my-5">
              <input
                placeholder="Full name"
                className="bg-[#E5E5E5] mb-6 p-2 border border-[#969595] outline-none placeholder:text-[#969595]"
                type="text"
              />
              <input
                placeholder="E-mail"
                className="bg-[#E5E5E5] mb-6 p-2 border border-[#969595] outline-none placeholder:text-[#969595]"
                type="text"
              />
              <input
                placeholder="Phone Number"
                className="bg-[#E5E5E5] mb-6 p-2 border border-[#969595] outline-none placeholder:text-[#969595]"
                type="text"
              />
            </div>
            <div>
              <textarea
                className="bg-[#E5E5E5] p-2 border border-[#969595] outline-none placeholder:text-[#969595] w-full"
                placeholder="Type message"
                rows={10}
              ></textarea>
            </div>
            <div className="flex items-end justify-end mt-2 lg:mt-0">
              <button className="bg-[#2F2F2F] px-14 py-2 text-[20px] text-white">
                SEND MESSAGE
              </button>
            </div>
          </form>
          <div className="col-span-12 lg:col-span-4 transform lg:-translate-y-32 mt-10 lg:mt-0">
            <div className="mb-14">
              <h3 className="text-[28px] lg:text-[32px] font-bold leading-[38px] mb-2">
                Phone number
              </h3>
              <p className="text-[16px] lg:text-[20px] font-normal ">
                +234 9016854815
              </p>
            </div>
            <div className="mb-14">
              <h3 className="text-[28px] lg:text-[32px] font-bold leading-[38px] mb-2">
                Email address
              </h3>
              <p className="text-[16px] lg:text-[20px] font-normal ">
                enquiries@rich-oak.com
              </p>
            </div>
            <div className="mb-14">
              <h3 className="text-[28px] lg:text-[32px] font-bold leading-[38px] mb-2">
                Office address
              </h3>
              <p className="text-[16px] lg:text-[20px] font-normal ">
                Plot 1072 Grand Pela Hotel Street, <br />
                Durumi, Area 1 Abuja.
              </p>
            </div>
            <div className="mb-14">
              <h3 className="text-[28px] lg:text-[32px] font-bold leading-[38px] mb-2">
                Office hours
              </h3>
              <p className="text-[16px] lg:text-[20px] font-normal ">
                Mondays-Fridays 9am-5pm
              </p>
            </div>
          </div>
        </div>
      </div>
        <footer
        className={
          "bg-[#141414] px-12 lg:px-20 py-32 mt-16 flex items-center justify-center w-full"
        }
      >
        <div
          className={
            "grid grig-cols-1 lg:grid-cols-3 place-content-center transform lg:translate-x-16 w-full"
          }
        >
          <div>
            <p className="mb-6 text-white text-[18px] font-medium ">
              Whitecrust
            </p>
            <ul>
              <li>
                <a className={"text-white "} href="">
                  The Firm
                </a>
              </li>
              <li>
                <a className={"text-white "} href="">
                  Our People
                </a>
              </li>
              <li>
                <a className={"text-white "} href="">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-6 text-white text-[18px] font-medium ">
              Explore Whitecrust
            </p>
            <ul>
              <li>
                <a className={"text-white "} href="">
                  Credit
                </a>
              </li>
              <li>
                <a className={"text-white "} href="">
                  Real Estate
                </a>
              </li>
              <li>
                <a className={"text-white "} href="">
                  Investment
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-6 text-white text-[18px] font-medium ">
              Get in touch
            </p>
            <ul>
              <li>
                <a className={"text-white "} href="">
                  Career
                </a>
              </li>
              <li>
                <a className={"text-white "} href="">
                  Our Office
                </a>
              </li>
              <li>
                <a className={"text-white "} href="">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      </main>

      
    
    </>
  );
}

export default RootLayouts;
