import Image from "next/image";
import map from "../../../public/images/map.png";
import surfing from "../../../public/images/surfing.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";


const CommonLayoutHomePage = () => {
  return (
    <div >
      <div className=" grid md:grid-cols-5 grid-cols-1 gap-5">
        {/* col 1  */}
        <div className="md:col-span-2">
          <div className="md:text-start text-center">
          <h1 className="md:text-5xl text-3xl font-medium md:mb-4 mb-2">
            Welcome Back , Arik Lee
          </h1>
          <p className="mb-7">Yargo Is Travel Platform That Can Provide...</p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white border-2 border-white md:rounded-3xl rounded-2xl md:p-5 p-3">
              <div className="flex flex-col justify-end ">
                <div className="inline-block ml-auto md:p-3 p-2 rounded-full bg-[#F6F6F6">
                  <MdOutlineArrowOutward className="md:text-2xl text-xl" />
                </div>
                <h2 className="text-4xl font-medium mb-3">1,463</h2>
                <p>Total Terminal</p>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#e7f3e7] to-[#f6f6f6] border-2 border-white md:rounded-3xl rounded-2xl md:p-5 p-3">
              <div className="flex flex-col justify-end">
                <div className="inline-block ml-auto md:p-3 p-2 rounded-full bg-white">
                  <MdOutlineArrowOutward  className="md:text-2xl text-xl" />
                </div>

                <h2 className="text-4xl font-medium mb-3">1,463</h2>
                <p>Total Place</p>
              </div>
            </div>
          </div>


          <div className="bg-[rgba(255,255,255,0.45)] md:p-5 p-3 md:mt-5 mt-3 md:rounded-3xl rounded-2xl md:space-y-5 space-y-3" >
            <div className="flex justify-between">
              <h3 className="text-xl font-medium">Latest Destination</h3>
              <button>See more</button>
            </div>

            {/* card  */}
            <div className="grid grid-cols-5 md:gap-5 gap-3 p-2 bg-gradient-to-l from-[#e7f3e7] to-[#f6f6f6] md:rounded-3xl rounded-2xl">
              <div className="col-span-2"><Image src={surfing} height={1000} width={1000} alt="surfing" /></div>

              <div className="col-span-3 flex flex-col justify-center">
                <h3 className="md:text-[32px] text-xl">Queen Amina</h3>
                <div className="flex gap-1 item-center">
                  <FiMapPin className="text-sm"/>
                  <p className="text-sm text-[#636F85]">State of Zazzau</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 md:gap-5 gap-3 p-2 bg-gradient-to-l from-[#e7f3e7] to-[#f6f6f6] md:rounded-3xl rounded-2xl">
              <div className="col-span-2"><Image src={surfing} height={1000} width={1000} alt="surfing" /></div>

              <div className="col-span-3 flex flex-col justify-center">
                <h3 className="md:text-[32px] text-xl">Queen Amina</h3>
                <div className="flex gap-1 item-center">
                  <FiMapPin className="text-sm"/>
                  <p className="text-sm text-[#636F85]">State of Zazzau</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 md:gap-5 gap-3 p-2 bg-gradient-to-l from-[#e7f3e7] to-[#f6f6f6] md:rounded-3xl rounded-2xl">
              <div className="col-span-2"><Image src={surfing} height={1000} width={1000} alt="surfing" /></div>

              <div className="col-span-3 flex flex-col justify-center">
                <h3 className="md:text-[32px] text-xl">Queen Amina</h3>
                <div className="flex gap-1 item-center">
                  <FiMapPin className="text-sm"/>
                  <p className="text-sm text-[#636F85]">State of Zazzau</p>
                </div>
              </div>
            </div>


          </div>

        </div>
        {/* col 2 */}
        <div className="md:col-span-3 bg-white p-5 space-y-5 rounded-3xl">
          <div className="">
            <h3>Map Overview</h3>
          </div>
          <Image src={map} height={1000} width={1000} alt="map" />
        </div>
      </div>
    </div>
  );
};

export default CommonLayoutHomePage;
