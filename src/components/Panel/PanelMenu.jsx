import {
  Briefcase,
  Calendar,
  Car,
  Chart,
  EmptyWalletChange,
  Home,
  InfoCircle,
  LogoutCurve,
  Message,
  Moon,
  Setting,
  Sun1,
} from "iconsax-react";

const PanelMenu = () => {
  return (
    <div className="w-[22%] p-4 bg-white hidden  lg:flex flex-col justify-between">
      <div>
        <section>
          <p className="text-[#94A7CB66] text-xs font-semibold p-4 tracking-[3px]">
            MAINMENU
          </p>
          <ul className=" flex flex-wrap h-full">
            <li className="flex items-center p-4 text-[#90a3bf] rounded-[10px] w-full hover:bg-[#3563E9] hover:text-white duration-300 cursor-pointer">
              <Home />
              <span className="ml-3 font-medium text-base">Dashboard</span>
            </li>

            <li className="mt-4 flex items-center p-4 text-[#90a3bf] rounded-[10px] w-full hover:bg-[#3563E9] hover:text-white duration-300 cursor-pointer">
              <Car />
              <span className="ml-3 font-medium text-base">Car Rent</span>
            </li>

            <li className="mt-4 flex items-center p-4 text-[#90a3bf] rounded-[10px] w-full hover:bg-[#3563E9] hover:text-white duration-300 cursor-pointer">
              <Chart />
              <span className="ml-3 font-medium text-base">Insight</span>
            </li>

            <li className="mt-4 flex items-center p-4 text-[#90a3bf] rounded-[10px] w-full hover:bg-[#3563E9] hover:text-white duration-300 cursor-pointer">
              <EmptyWalletChange />
              <span className="ml-3 font-medium text-base">Reimburse</span>
            </li>

            <li className="mt-4 flex items-center p-4 text-[#90a3bf] rounded-[10px] w-full hover:bg-[#3563E9] hover:text-white duration-300 cursor-pointer">
              <Message />
              <span className="ml-3 font-medium text-base">Inbox</span>
            </li>

            <li className="mt-4 flex items-center p-4 text-[#90a3bf] rounded-[10px] w-full hover:bg-[#3563E9] hover:text-white duration-300 cursor-pointer">
              <Calendar />
              <span className="ml-3 font-medium text-base">Calender</span>
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-[#94A7CB66] text-xs font-semibold p-4 tracking-[3px]">
            PREFERENCES
          </p>
          <ul className=" flex flex-wrap h-full">
            <li className="flex items-center p-4 text-[#90a3bf] rounded-[10px] w-full hover:bg-[#3563E9] hover:text-white duration-300 cursor-pointer">
              <Setting color="#90a3bf" />
              <span className="ml-3 font-medium text-base">Settings</span>
            </li>

            <li className="mt-4 flex items-center p-4 text-[#90a3bf] rounded-[10px] w-full hover:bg-[#3563E9] hover:text-white duration-300 cursor-pointer">
              <InfoCircle />
              <span className="ml-3 font-medium text-base">Help & Center</span>
            </li>

            <li className="mt-4 flex items-center p-4 text-[#90a3bf] rounded-[10px] w-full hover:bg-[#3563E9] hover:text-white duration-300 cursor-pointer">
              <div className="flex justify-between items-center">
                <Briefcase />
                <span className="ml-3 font-medium text-base">Dark Mode</span>
              </div>

              <div className="flex justify-between items-center ml-6 bg-[#F6F7F9] rounded-full p-[3px]">
                <span className="mr-[6px] bg-[#3563E9] p-[3px] rounded-full text-white">
                  <Sun1 />
                </span>
                <span>
                  <Moon color="#90a3bf" />
                </span>
              </div>
            </li>
          </ul>
        </section>
      </div>

      <section className="mt-12">
        <div className="mt-4 flex items-center p-4 text-[#90a3bf] rounded-[10px] w-full hover:bg-[#3563E9] hover:text-white duration-300 cursor-pointer">
          <LogoutCurve />
          <span className="ml-3 font-medium text-base">Log Out</span>
        </div>
      </section>
    </div>
  );
};

export default PanelMenu;
