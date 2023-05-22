import Man from "../assets/male-worker.png";
import Woman from "../assets/female-worker.png";
import Building from "../assets/glass-building.png";
import Worker from "../assets/builder.png";
import Plan from "../assets/plan.png";
import Company from "../assets/building.png";
import Frame from "../assets/frame.png";
function Home() {


  return (
    <>
     <div className="b-box">
     <div className={"bg-image  pt-16 lg:mt-0 h-full lg:h-screen flex items-center "}>
        <div className="px-4 lg:px-24 mt-16 lg:mt-0">
          <h1 className={"text-[34px] leading-[64px] lg:text-[68px] mb-8"}>
            Helping you build <br /> a financially secure future
          </h1>
          <p className=" lg:w-3/5">
            we are building trust through long-term relationships with our
            clients. We partner with
            individuals and institutions to provide tailored financial solutions
            for sustainable growth 
            and wealth building.
          </p>
        </div>
        {/* <Image src={Hero} alt="" /> */}
      </div>
     </div>

      <div
        className={
          "bg-[#232323] w-full py-12 px-6 lg:px-16 lg:py-6 my-12 lg:my-0  lg:h-screen flex flex-col space-y-5 lg:space-y-0  lg:flex-row items-center lg:space-x-6"
        }
      >
        <div>
          <h2 className={"text-white text-[32px] lg:text-[68px]  mb-8"}>
            Who are we ?
          </h2>
          <p
            className={
              "text-[16px] text-white mb-4 max-w-[587px] lg:text-justify "
            }
          >
            Whitecrust is a financial institution that focuses on helping
            individuals and institutions achieve their financial goals through
            investments in alternative assets and access to capital via
            innovative financial solutions. We believe that everyone should have
            the opportunity to explore and invest in a diverse range of
            alternative investment options to achieve long-term financial
            success. We are committed to providing you with the tools and
            resources you need to make informed investment decisions that are
            tailored to your unique needs and goals. At Whitecrust,we are
            passionate about helping you build a brighter financial future
          </p>
          <button className="bg-white text-[#393939] text-[20px] p-1">
            READ MORE
          </button>
        </div>

        <div className="flex flex-col space-y-5 lg:space-y-0  lg:flex-row items-center lg:space-x-3">
          <img
            className={"max-h-[700px] max-w-[300px] w-full object-cover"}
            src={Man}
            alt="male worker"
          />
          <img
            className={"max-h-[700px] max-w-[300px] w-full object-cover"}
            src={Woman}
            alt="female worker"
          />
        </div>
      </div>

      <div className={"bg-[#F5F5F5]"}>
        <div
          className={
            "px-6 lg:px-24 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-y-7 lg:gap-y-0 lg:gap-x-32"
          }
        >
          <div>
            <h2 className={"text-[#3D3D3D] text-[32px] lg:text-[68px]  mb-8"}>
              What we do
            </h2>
            <p className={"text-[16px] text-[#3D3D3D] mb-4 lg:text-justify "}>
              We specialize in providing a broad spectrum of financial services,
              including a diverse range of alternative investment options,
              access to capital to achieve financial freedom. Our unwavering
              dedication to our clients means we are always on the lookout for
              the best opportunities to meet their unique financial needs. Our
              approach emphasizes personalized attention and tailored solutions,
              making us an ideal partner for individuals and businesses seeking
              to secure their financial futures.
            </p>
          </div>

          <div className={"bg-[#E5E5E5] px-8 py-4"}>
            <div
              className={
                "flex items-center justify-between lg:justify-around space-y-8 lg:space-y-0 flex-col h-full"
              }
            >
              <p className="text-[#3D3D3D] lg:text-justify ">
                <span className={"font-extrabold"}>
                  Our team of seasoned financial professionals
                </span>{" "}
                are committed to delivering superior service and expert guidance
                to help our clients achieve their financial objectives.
              </p>
              <hr className={"bg-[#000000] h-[3px] w-full max-w-[595px]"} />
              <p className="text-[#3D3D3D] lg:text-justify ">
                <span className={"font-extrabold"}>
                  With our guidance, clients can rest assured they are receiving
                </span>{" "}
                the highest quality of services possible, as well as access to a
                wide range of financial products and services designed to help
                them achieve financial freedom.
              </p>
            </div>
          </div>
        </div>

        <div className={"px-6 lg:px-24 lg:py-24"}>
          <div>
            <h2 className={"text-[#3D3D3D] text-[32px] lg:text-[48px]  my-8"}>
              We invest on behalf of private individuals and institutions
            </h2>
            <p className="text-[#3D3D3D] text-[16px] lg:text-[20px] lg:text-justify ">
              across different alternative investment asset classes in
              order to achieve their investment goals.
            </p>
          </div>

          <div
            className={
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 gap-y-16 lg:gap-y-0 lg:gap-x-24 pb-8 lg:pb-0"
            }
          >
            <div className="flex items-center justify-start flex-col">
              <img
                className={"mb-4 lg:max-w-[350px] object-cover"}
                src={Building}
                alt="male worker"
              />
              <div>
                <h2
                  className={"mb-8 text-[24px]  lg:text-[36px] text-[#292929]"}
                >
                  Security of investors funds
                </h2>
                <p className="text-[#3D3D3D] text-[16px] lg:text-left ">
                  Security of investors funds remain our primary goal and this
                  guides our approach to investing. We invest in sound business
                  opportunities where we can gain long term competitive
                  advantage which will in turn provide higher returns and
                  diversification benefits for our clients.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-start flex-col">
              <img
                className={"mb-4 lg:max-w-[350px] object-cover"}
                src={Worker}
                alt="male worker"
              />
              <div>
                <h2
                  className={"mb-8 text-[24px]  lg:text-[36px] text-[#292929]"}
                >
                  Diversified Investments
                </h2>
                <p className="text-[#3D3D3D] text-[16px] lg:text-left ">
                  We believe strongly in asset diversification for long-term
                  financial success. This is why we have a trained team of
                  investment experts who can identify profitable opportunities
                  across various markets and asset classes, such as credit, real
                  estate, and alternatives, for our clients.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-start flex-col">
              <img
                className={"mb-4 lg:max-w-[350px]"}
                src={Plan}
                alt="male worker"
              />
              <div>
                <h2
                  className={"mb-8 text-[24px]  lg:text-[36px] text-[#292929]"}
                >
                  Continous Innovation
                </h2>
                <p className="text-[#3D3D3D] text-[16px]  lg:text-left">
                  We are aware that the business and financial landscape is
                  constantly evolving. In all our businesses either existing or
                  new, we are constantly on the look out for opportunities and
                  innovating on behalf of our customers to fill the gap and help
                  them build wealth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={"bg-[#000000] w-full px-4 lg:px-0"}>
        <h2 className={"text-[32px] lg:text-[64px] text-white text-center mb-4 pt-4 lg:pt-0 lg:mb-8"}>
          Our Impact
        </h2>

        <div
          className={
            "grid grid-cols-1 lg:grid-cols-2 items-center justify-between"
          }
        >
          <div className="p-8 lg:p-16">
            <p className={"text-white text-[14px] lg:text-[16px] lg:text-justify "}>
              We are committed to strengthening Africa through value-driven
              partnerships and increasing the wealth of individuals and
              institutions. We believe that by working together and focusing on
              building value, we can make a positive impact on the continent.
            </p>
          </div>

          <div>
            <img className={"min-h-[521px] object-cover"} src={Company} alt="company" />
          </div>
        </div>

        <div
          className={
            "grid grid-cols-1 lg:grid-cols-2 items-center justify-between mt-5 lg:mt-0"
          }
        >
          <div>
            <img className={"min-h-[521px] object-cover"} src={Frame} alt="Frame" />
          </div>

          <div className="p-8 lg:p-16">
            <p className={"text-white text-[14px] lg:text-[16px] lg:text-justify "}>
              Also to help improve the lives of its people. Whether we are
              partnering with businesses, working with institutions, or
              supporting individuals, our goal is to create value and increase
              wealth for all involved.
            </p>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Home
