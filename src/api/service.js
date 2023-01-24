// import axios from "axios"

// const popularCarAPI = async () =>{

// 		const res = await axios.get('https://quiet-ape-7.app.smartmock.io/');
// 		return res.json();

// }

// export { popularCarAPI }

// import axios from "axios"

// const popularCarAPI = async () =>{
//     const data = await axios.get("https://carrent.app.smartmock.io/popularCar");
//     const res = await data.json();
//     return res;

//     // fetch("https://carrent.app.smartmock.io/popularCar")
//     // .then(response => response.json())
//     // .then(data => {
//     //   console.log(data);
//     // })
//     // .catch(err => {
//     //   console.log(err);
//     // })
// }

// export { popularCarAPI }

import axios from "axios";

// const baseURL = "https://carrent.app.smartmock.io";

// async function popularCarAPI() {
//   const { data } = await axios.get(`${baseURL}/popularCar`);
//   return data;
// }

// async function recommandedCarAPI() {
//   const { data } = await axios.get(`${baseURL}/recommandedCar`);
//   return data;
// }
async function carListAPI() {
  const { data } = await axios.get(`https://svcars.vercel.app/cars`);
  return data;
}

// export { popularCarAPI, recommandedCarAPI,carListAPI };
export { carListAPI };
