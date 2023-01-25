import axios from "axios";

async function carListAPI() {
  const { data } = await axios.get(`https://svcars.vercel.app/cars`);
  return data;
}

export { carListAPI };
