import React from "react";

const StarRating = ({ rating }) => {
  //   const stars = [];

  //   for (let i = 0; i < 5 - rating; i++) {
  //     stars.push(<span className="text-[#90A3BF]">&#9733;</span>);
  //   }

  //   for (let i = 0; i < rating; i++) {
  //     stars.push(
  //       <span key={i} className="text-[#fbad39]">
  //         &#9733;
  //       </span>
  //     );
  //   }

  return (
    <>
      {/* <div className="flex justify-between items-center ">
        {stars}
     </div>  */}

      <div className="flex justify-between items-center ">
        {[...Array(5)].map((item, key) => {
          return (
            <span
              className={key < rating ? "text-[#fbad39]" : "text-[#90A3BF]"}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    </>
  );
};

export default StarRating;

// const Rating = ({ totle, filled }) => {
//     return (
//       <div>
//         {
//           [...Array(totle)].map((item, key) => {
//             return <span style={{ backgroundColor: key < filled ? "yellow" : null }}> star icon </span>;
//           })
//         }
//       </div>
//     );
//   };
