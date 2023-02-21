import { More } from "iconsax-react";

const TopCarRental = () => {
  return (
    <div className="bg-[#F6F7F9] lg:w-[48%]">
      <div className=" mt-8 p-4 bg-white rounded-[10px] lg:mt-0">
        <section className="text-[#1A202C] flex justify-between items-center">
          <p className="text-[#1A202C] font-bold text-base lg:text-xl">
            Top 5 Car Rental
          </p>

          <More />
        </section>

        <section className="flex justify-center items-center my-6">
          <img
            className="relative"
            src="https://i.postimg.cc/3RtSmqz8/Chart.png"
            alt="Chart"
          />

          <p className="flex justify-center items-center flex-wrap absolute ">
            <span className="w-full text-center text-[#1A202C] font-bold text-[28px] lg:text-2xl">
              72,030
            </span>
            <span className="w-full text-center text-[#90A3BF] font-medium text-sm mt-1">
              Rental Car
            </span>
          </p>
        </section>

        <ul className="mt-6">
          <li className="flex justify-between items-center font-semibold text-sm">
            <div className="flex items-center">
              <span className="bg-[#0D3559] w-3 h-3 rounded-full block mr-3"></span>
              <span className="text-[#90A3BF]">Sport Car</span>
            </div>
            <span className="text-[#1A202C]">17,439</span>
          </li>

          <li className="flex justify-between items-center font-semibold text-sm mt-4">
            <div className="flex items-center">
              <span className="bg-[#175D9C] w-3 h-3 rounded-full block mr-3"></span>
              <span className="text-[#90A3BF]">SUV</span>
            </div>
            <span className="text-[#1A202C]">9,478</span>
          </li>

          <li className="flex justify-between items-center font-semibold text-sm mt-4">
            <div className="flex items-center">
              <span className="bg-[#2185DE] w-3 h-3 rounded-full block mr-3"></span>
              <span className="text-[#90A3BF]">Coupe</span>
            </div>
            <span className="text-[#1A202C]">18,197</span>
          </li>

          <li className="flex justify-between items-center font-semibold text-sm mt-4">
            <div className="flex items-center">
              <span className="bg-[#63A9E8] w-3 h-3 rounded-full block mr-3"></span>
              <span className="text-[#90A3BF]">Hatchback</span>
            </div>
            <span className="text-[#1A202C]">12,510</span>
          </li>

          <li className="flex justify-between items-center font-semibold text-sm mt-4">
            <div className="flex items-center">
              <span className="bg-[#A6CEF2] w-3 h-3 rounded-full block mr-3"></span>
              <span className="text-[#90A3BF]">MPV</span>
            </div>
            <span className="text-[#1A202C]">14,406</span>
          </li>
        </ul>
      </div>

      <div className=" mt-8 p-4 bg-white rounded-[10px] ">
        <section className="flex justify-between items-center">
          <p className="text-[#1A202C] font-bold text-base lg:text-xl">
            Recent Transaction
          </p>
          <span className="text-[#3563E9] font-medium text-xs">View All</span>
        </section>

        <ul className="mt-6">
          <li className="flex justify-between items-center border-b-[1px] border-[#C3D4E966] py-3">
            <img
              className="w-[76px] object-cover"
              src="https://i.postimg.cc/pT9b7DDZ/popular-Car2.png"
              alt="car"
            />

            <div className="flex flex-col">
              <span className="text-[#1A202C] font-bold text-sm lg:text-base">
                Nissan GT - R
              </span>
              <span className="text-[#90A3BF] font-medium text-xs mt-2">
                Sport Car
              </span>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-[#90A3BF] font-medium text-xs">
                20 July
              </span>
              <span className="text-[#1A202C] font-bold text-base mt-2">
                $80.00
              </span>
            </div>
          </li>

          <li className="flex justify-between items-center border-b-[1px] border-[#C3D4E966] py-3">
            <img
              className="w-[76px] object-cover"
              src="https://i.postimg.cc/2jbrXfGD/popular-Car1.png"
              alt="car"
            />

            <div className="flex flex-col">
              <span className="text-[#1A202C] font-bold text-sm lg:text-base">
                Koegnigsegg
              </span>
              <span className="text-[#90A3BF] font-medium text-xs mt-2">
                Sport Car
              </span>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-[#90A3BF] font-medium text-xs">
                19 July
              </span>
              <span className="text-[#1A202C] font-bold text-base mt-2">
                $99.00
              </span>
            </div>
          </li>

          <li className="flex justify-between items-center border-b-[1px] border-[#C3D4E966] py-3">
            <img
              className="w-[76px] object-cover"
              src="https://i.postimg.cc/pTgbtpCt/popular-Car3.png"
              alt="car"
            />

            <div className="flex flex-col">
              <span className="text-[#1A202C] font-bold text-sm lg:text-base">
                Rolls - Royce
              </span>
              <span className="text-[#90A3BF] font-medium text-xs mt-2">
                Sport Car
              </span>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-[#90A3BF] font-medium text-xs">
                18 July
              </span>
              <span className="text-[#1A202C] font-bold text-base mt-2">
                $96.00
              </span>
            </div>
          </li>

          <li className="flex justify-between items-center border-b-[1px] py-3">
            <img
              className="w-[76px] object-cover"
              src="https://i.postimg.cc/ncfbR9M4/recommand-Car2.png"
              alt="car"
            />

            <div className="flex flex-col">
              <span className="text-[#1A202C] font-bold text-sm lg:text-base">
                CR - V
              </span>
              <span className="text-[#90A3BF] font-medium text-xs mt-2">
                SUV
              </span>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-[#90A3BF] font-medium text-xs">
                17 July
              </span>
              <span className="text-[#1A202C] font-bold text-base mt-2">
                $80.00
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopCarRental;
