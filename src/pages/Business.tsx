import Video from "../assets/video.png";
import WomanCall from "../assets/woman-call.png";
import Man from "../assets/man1.png";
import Man2 from "../assets/man2.png";
function Business() {


    return (
      <>
      <main className={"  "}>
     <div className="b-box">


       <div className={"our-business pt-16  px-6 lg:px-24 lg:h-screen flex items-center "}>
        <div className="mt-16 lg:mt-0">
          <h1 className={"text-[34px] lg:text-[58px] mb-8"}>Investment</h1>
          <p className=" lg:w-3/5">
            Our core focus over the years has been on delivering safe and
            reliable alternative 
            investment options to our investors seeking long term financial
            growth and a 
            diversified portfolio. We partner with individuals and institutions
            to achieve their  financial goals.
          </p>
        </div>
      </div>
     </div>

      <div className="bg-[#232323] py-12 px-2 lg:px-0">
        <h2 className="text-white text-[32px] lg:text-[48px]  text-center pb-5">Investment</h2>

        <div className="flex items-center justify-center flex-col w-full">
          <img src={Video} alt={"video element"} className="lg:max-w-5xl" />

          <div className="lg:max-w-5xl mt-6 text-white pt-5 pb-8">
            <p className=" text-[14px] lg:text-[20px]">
              We understand that the world of finance can be intimidating and
              overwhelming, but at Rich Oak, we are here to simplify things for
              you. Our focus is on making investing easy to understand and
              accessible to everyone. We are dedicated to providing you with the
              highest level of support and expertise to help you make informed
              investment decisions. With Rich Oak, you wll have access to a wide
              range of investment options, and our team of experts are always
              available to provide personalized advice and guidance to help you
              achieve your investment goals.
            </p>
          </div>
        </div>
      </div>
      <div className="bg relative">
       <div className="absolute px-2 transform translate-y-10 space-y-8 lg:space-y-0 lg:translate-y-24 flex flex-col lg:flex-row lg:items-center lg:space-x-5 lg:justify-between w-full lg:px-12">
       <div className="text-center lg:text-left">
          <p className="text-white text-[22px] lg:text-[42px] font-bold ">2000+ <span className="font-light text-[12px] lg:text-[24px]">Trusted Clients</span></p>
       </div>
       <div className="text-center lg:text-left">
          <p className="text-white text-[22px] lg:text-[42px] font-bold ">98% <span className="font-light text-[12px] lg:text-[24px]">LoremIpsum</span></p>
       </div>
       <div className="text-center lg:text-left">
          <p className="text-white text-[22px] lg:text-[42px] font-bold ">N100k+ <span className="font-light text-[12px] lg:text-[24px]"> Investment payouts</span></p>
       </div>

       </div>
      </div>

      <div className="py-12 bg-[#F5F5F5] px-5 lg:px-24">
        <h2 className="text-[#3D3D3D] text-center text-[24px] lg:text-[48px] lg:mb-7">
          Our Investment solutions
        </h2>
        <p className="text-center text-[#3D3D3D]  text-[14px] lg:text-[20px]">
          Our investment solutions are designed to provide you with more than
          just financial gains. They are a means to achieve your life
          goals and secure your future. With our expert guidance and support,
          you can  build a strong financial foundation that will empower
          you to live the life you have always dreamed of . Whether you
          are looking to invest in your family is future, fund your retirement,
          or pursue your passions,  we are here to help you every step of
          the way. Let us make your dreams a reality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 mt-12">
            <div className="bg-[#000000] w-full max-w-[371px] h-full min-h-[581px]">
              <div className="flex items-start justify-center flex-col h-full px-8">
                <h3 className="text-white text-left text-[36px] mb-6">
                Diversified Investments
                </h3>
                <p className="text-white text-left lg:text-[14px] leading-[24px]">
                Whitecrust invests in Credit, Real Estate, Agriculture and Private Equity. Exposing our investors to more opportunities for returns and allowing them enjoy the benefits of a diversified portfolio.
                </p>
              </div>
            </div>

            <div className="relative my-6 lg:my-0">
              <img
                src={Man}
                className="h-full min-h-[581px] object-cover"
                alt="second frame"
              />

              <div className="z-50 absolute top-0 flex items-start justify-center flex-col h-full px-8">
                <h3 className="text-white text-left text-[36px] mb-6">
                Financial Advisory
                </h3>
                <p className="text-white text-left lg:text-[14px] leading-[24px]">
                We stand apart by offering our partners a clear strategy for growth. We provide advisory solutions to help them maximize the funds they have, in-other to create the best impact for their businesses. We provide the businesses we partner with, advisory services backed by facts and figures as we study moving market trends in each specific industry, this has helped our partners achieve stunning profits over the years.
                </p>
              </div>
            </div>

            <div className="relative my-6 lg:my-0">
              <img
                src={Man2}
                className="h-full min-h-[581px] object-cover"
                alt="third frame"
              />

              <div className="z-50 absolute top-0 flex items-start justify-center flex-col h-full px-8">
                <h3 className="text-white text-left text-[36px] mb-6">
                Fund Management
                </h3>
                <p className="text-white text-left lg:text-[14px] leading-[24px]">
                We scout and capture great Investment opportunities for our partners. As businesses turn over huge amounts of profits, we come in to invest these funds into vehicles that offers attractive risk adjusted returns, increasing our clients total profit turn over and asset portfolio.
                </p>
              </div>
            </div>
          </div>
      </div>

      <div className="wb-bg">
      <div className="mt-14 px-8 lg:py-24 lg:px-24 flex  flex-col lg:flex-row  lg:justify-between  bg-white">
        <h2 className="font-bold text-[32px] lg:text-[64px] leading-[64px] text-[#3D3D3D]  mb-8">
          Industries we invest  in
        </h2>

        <div className="w-full lg:max-w-[600px]">
          <div className="bg-[#F5F5F5] p-5 mb-8">
           <div className="flex mb-4 items-center justify-between">
           <h2 className="text-[#121212] text-[32px] lg:text-[48px] leading-[64px]">
              Real estate
            </h2>
            <svg className="text-[#121212]"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 16h2v-4.2l1.6 1.6L16 12l-4-4l-4 4l1.4 1.4l1.6-1.6V16Zm1 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
           </div>
            <p className="text-[#121212] ">
              We offer a range of real estate services where individuals can
              invest in our real estate fund to enjoy good returns and also own
              properties with a flexible plan. Our real estate business provides
              competitive ROI for our investors and we are expanding to offer
              even more robust real estate services
            </p>
          </div>

          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-[#121212] text-[32px] lg:text-[48px] leading-[64px]">
              Credit
            </h2>
            <svg className="text-[#121212]"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 16h2v-4.2l1.6 1.6L16 12l-4-4l-4 4l1.4 1.4l1.6-1.6V16Zm1 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
          </div>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-[#121212] text-[32px] lg:text-[48px] leading-[64px]">
              Agriculture
            </h2>
            <svg className="text-[#121212]"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 16h2v-4.2l1.6 1.6L16 12l-4-4l-4 4l1.4 1.4l1.6-1.6V16Zm1 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
          </div>
        </div>
      </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-[#F5F5F5] lg:space-x-14 px-5 lg:px-10 py-12">
        <img src={WomanCall} alt="woman on a call" />

        <div className="lg:max-w-[750px]">
          <h2 className="font-bold text-[32px] lg:text-[64px] leading-[64px] text-[#3D3D3D] my-8">
            Our Investment <br />
            Impact
          </h2>

          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
            <p className="lg:text-justify">
              we are committed to building partnerships and creating value for
              individuals and institutions across Africa. Our goal is simple: to
              help our clients become financially free. Whether we are working
              with businesses, institutions, or individuals, our goal is to
              create positive impact and improve lives,
            </p>
            <p className="text-left lg:text-justify  mt-4 lg:mt-0">
              through solid alternative investment opportunities. We believe
              that through collaboration and a focus on building value, we can
              help strengthen Africa and make a lasting difference on the
              continent.
            </p>
          </div>
        </div>
      </div>

    </main>
       
      </>
    )
  }
  
  export default Business
  