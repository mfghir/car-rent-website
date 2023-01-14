// import axios from "axios"

// const popularCarAPI = async () =>{
    
// 		const res = await axios.get('https://quiet-ape-7.app.smartmock.io/');
// 		return res.json();

// }

// export { popularCarAPI }

import axios from "axios"

const popularCarAPI = async () =>{
    const res = await axios.get("https://quiet-ape-7.app.smartmock.io/popularCar")

    return console.log(res.json());
}

export { popularCarAPI }


