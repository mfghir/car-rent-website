import axios from "axios";

async function carListAPI() {
  try {
    const { data } = await axios.get(import.meta.env.VITE_BASE_URL + '/carList');
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export { carListAPI };
