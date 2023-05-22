import Man from "../assets/busMan.png";
function Careers() {
  return (
    <>
      <div>
        <div className={"bg-[#040404] h-screen  careers-hero"}>
          <div className={"pt-22 lg:pt-72  px-4 flex items-end justify-end w-full"}>
            <div className="w-full mt-24 lg:mt-0 lg:max-w-lg">
              <h1 className={"text-[34px] text-white lg:text-[58px] mb-8"}>
                Careers
              </h1>
              <p className="text-white ">
                We are a people driven by commitment to our work,
                 with a great alignment of values, working with high
                 integrity and for the achievement of our collective
                goals. Our culture fosters a supportive environment
                 for professional growth, personal development, and 
                maintaining a healthy work-life balance. We're 
                constantly seeking out talented individuals who are 
                passionate about investing and making a positive impact.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#f3f3f3] py-12 w-bg  lg:h-full">
         <div className="px-12 lg:px-24 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-12">

         <div>
            <img src={Man} className="max-h-[964px]" alt="Business man" />
          </div>
          <div className="lg:max-w-lg mt-8">
            <div className="mb-8">
              <h3 className="text-[32px] mb-6 text-[#141414] font-bold">Trainings/Personal <br /> Development</h3>
              <p className="text-[#101010] text-[16px]">
                Our people are empowered to learn and develop into their roles
                and within any department. We have a strong personnel
                development culture and are happy to support our people to grow.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-[32px] mb-6 text-[#141414] font-bold">Diversity & <br /> Inclusion</h3>
              <p className="text-[#101010] text-[16px]">
                Anyone with passion for what we do and the unique skills
                required for an available role can apply and work at Rich Oak.
                We give fair and equal opportunity to every candidate and every
                staff.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-[32px] mb-6 text-[#141414] font-bold">Healthy Work <br /> environment</h3>
              <p className="text-[#101010] text-[16px]">
                100% of our staff report that our work culture has helped them
                grow personally and professionally, positively impacted their
                lives and offers them job satisfaction.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-[32px] mb-6 text-[#141414] font-bold">Benefits</h3>
              <p className="text-[#101010] text-[16px]">
                We want our people to excel in all aspects of their lives and
                that’s why we offer very competitive compensation and benefits
                which include – Health Insurance, Continuous personal
                development fund, Housing allowance, Paid time off, daily lunch
                plans and other perks aimed at boosting employee morale and
                rewarding good performance.
              </p>
            </div>
          </div>
         </div>
        </div>
      </div>
    </>
  );
}

export default Careers;
