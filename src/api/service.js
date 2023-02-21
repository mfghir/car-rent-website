import axios from "axios";

async function carListAPI() {
  try {
    // const { data } = await axios.get(process.env.REACT_APP_BASE_URL + '/carList');
    const { data } = await axios.get(
      "https://car-rent-web-api.vercel.app/carList"
    );
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export { carListAPI };
