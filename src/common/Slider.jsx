import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import PopularCar from "../components/PopularCar";

import { Link } from "react-router-dom";

function Slider({ data }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <motion.div
        className="overflow-hidden cursor-grab "
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex "
        >
          {data?.map((item) => {
            return (
              <motion.div key={item.id}>
                  {/* <Link to={`/detailCar/${item.id}`} key={item.id}> */}
                  <PopularCar item={item} />
              {/* </Link> */}
                </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Slider;
