import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
// import images from "./images";
// import { PopularCarData } from "../data/popularCarData";
import PopularCar from "../components/PopularCar";
import { NavLink } from "react-router-dom";

function Slider({data}) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
//   const [data, setData] = useState(PopularCarData);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <motion.div
        className="carousel  overflow-hidden"
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex justify-between items-center flex-nowrap"
        >
          {data?.map((item) => {
            return (
    <NavLink to={`/detailCar/${item.id}`}  >

              <motion.div key={item.id} >
                <PopularCar item={item} />
               </motion.div>
          </NavLink>
            );
          })}
        </motion.div>
        
      </motion.div>
    </>
  );
}

export default Slider;
