import axios from 'axios';

const baseUrl = 'http://localhost:3003/api/cards';

const getCards = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

export default { getCards };
