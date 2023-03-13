import { Link, NavLink } from "react-router-dom";
import {
  Heart,
  Notification,
  SearchNormal1,
  Setting2,
  Setting4,
} from "iconsax-react";

const PaymentNavbar = () => {
  return (
    <div className="flex justify-between items-center flex-wrap p-8 md:flex-nowrap lg:py-10 border-b border-[#C3D4E966]">
      <section className="flex justify-between items-center">
        <NavLink to="/">
          <h1 className="text-[#3563E9] text-2xl lg:text-[32px]">MORENT</h1>
        </NavLink>
      </section>

      <div className="md:flex items-center hidden">
        <Heart color="#596780" variant="Bold" className="md:mr-5" />

        <div className="relative">
          <span className="absolute w-[11px] h-[11px] bg-[#FF4423] rounded-xl bottom-6 left-5"></span>
          <Notification color="#596780" variant="Bold" className="md:mr-5 " />
        </div>

        <Link to="/panel">
          <Setting2 color="#596780" variant="Bold" className="md:mr-5" />
        </Link>

        <img
          className="md:w-11 md:h-11"
          src="https://i.postimg.cc/Y2VT4G1c/Imageprofile.png"
          alt="Imageprofile"
        />
      </div>

      <img
        className="w-7 h-7 md:hidden"
        src="https://i.postimg.cc/Y2VT4G1c/Imageprofile.png"
        alt="Imageprofile"
      />
    </div>
  );
};

export default PaymentNavbar;
