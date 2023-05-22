import Mark from "../assets/mark.svg";
import BusMan from "../assets/bus-man.png";
import BusWoman from "../assets/bus-woman.png";
function About() {
  return (
    <>
      <div>
        <main className={"bg-[#040404] about-me"}>
          <div
            className={
              "px-4 lg:px-24 lg:pt-72  flex pt-16 justify-end h-screen w-full lg:h-screen"
            }
          >
            <div className="w-full lg:max-w-md mt-16 lg:mt-0">
              <h1 className={"text-[34px] text-white lg:text-[68px] mb-8"}>
                Our Edge{" "}
              </h1>
              <p className="text-white  text-[12px] lg:text-[16px] ">
                we focus on building businesses with a long-term competitive{" "}
                 advantage, creating returns that benefit our investors,{" "}
                 customers and stakeholders alike. By fostering sustained{" "}
                 growth and economic prosperity, we are committed to{" "}
                 improving lives and driving positive change through our{" "}
                investments.
              </p>
            </div>
          </div>
        </main>

        <div>
          <div className="px-5 lg:px-24 lg:py-24 lg:h-screen flex item-center justify-center flex-col wb-bg mb-8 lg:mb-0">
            <div className="text-center mb-8 mt-6 lg:mt-0">
              <h2 className="text-[32px] lg:text-[48px]">Our mission</h2>
              <p className="text-[16px] lg:text-[20px]  text-center lg:px-32">
                Breaking barriers to be Africa’s biggest financial partner in
                asset base through professionalism, innovation and providing
                premium value for our customers.
              </p>
            </div>
            <div className="text-center mt-8">
              <h2 className="text-[32px] lg:text-[48px]">Our vision</h2>
              <p className="text-[16px] lg:text-[20px] ">
                To be Africa’s Most Reliable Financial Partner
              </p>
            </div>
          </div>
        </div>

        <div className="bg relative">
          <div className="absolute px-2 transform translate-y-10 space-y-8 lg:space-y-0 lg:translate-y-24 flex flex-col lg:flex-row lg:items-center lg:space-x-5 lg:justify-between w-full lg:px-12">
            <div className="text-center lg:text-left">
              <p className="text-white text-[22px] lg:text-[42px] font-bold ">
                2000+{" "}
                <span className="font-light text-[12px] lg:text-[24px]">
                  Trusted Clients
                </span>
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-white text-[22px] lg:text-[42px] font-bold ">
                98%{" "}
                <span className="font-light text-[12px] lg:text-[24px]">
                  LoremIpsum
                </span>
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-white text-[22px] lg:text-[42px] font-bold ">
                N100k+{" "}
                <span className="font-light text-[12px] lg:text-[24px]">
                  {" "}
                  Investment payouts
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="px-8 lg:px-20 py-12 lg:py-24 mt-14 text-[48px] grid lg:gap-x-5 grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="mb-6">
              <h2 className="mb-4 text-[32px] lg:text-[48px]">
                The values that makes us stand out
              </h2>
              <p className="text-[14px] lg:text-[20px] text-[#3D3D3D] ">
                Our values define everything we do, they are the principles that
                guide our professional and personal conduct. These principles
                remain at the core of Whitecrust, ensuring we achieve excellence
                in all our businesses.
              </p>
            </div>

            <div className="mb-5 lg:mb-0">
              <ul className="lg:ml-14">
                <li className={"flex space-x-6"}>
                  <img src={Mark} alt={"mark"} />
                  <span className={""}>Professionalism</span>
                </li>
                <li className={"flex space-x-6"}>
                  <img src={Mark} object-cover alt={"mark"} />
                  <span className={""}>Speed</span>
                </li>
                <li className={"flex space-x-6"}>
                  <img src={Mark} alt={"mark"} />
                  <span className={""}>Innovation</span>
                </li>
                <li className={"flex space-x-6"}>
                  <img src={Mark} alt={"mark"} />
                  <span className={""}>Integrity</span>
                </li>
                <li className={"flex space-x-6"}>
                  <img src={Mark} alt={"mark"} />
                  <span className={""}>Consistency</span>
                </li>

                <li className={"flex space-x-6"}>
                  <img src={Mark} alt={"mark"} />
                  <span className={""}>Team Work</span>
                </li>
                <li className={"flex space-x-6"}>
                  <img src={Mark} alt={"mark"} />
                  <span className={""}>Respect</span>
                </li>
                <li className={"flex space-x-6"}>
                  <img src={Mark} alt={"mark"} />
                  <span className={""}>Employee Satisfaction</span>
                </li>
                <li className={"flex space-x-6"}>
                  <img src={Mark} alt={"mark"} />
                  <span className={""}>Customer Obsession</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
            <img
              src={BusWoman}
              className="max-h-[760px] max-w-[300px] transform lg:translate-y-24 object-cover mb-5 lg:mb-0"
              alt="woman"
            />
            <img
              src={BusMan}
              className="max-h-[760px] max-w-[300px] transform lg:-translate-y-24 object-cover"
              alt="man"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
