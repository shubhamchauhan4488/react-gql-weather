import axios from 'axios';

const getFetchCityUrl = (lat, long) => `http://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`;

export const weatherApi = {
  tryFetchCityFromCoordinates: async (lat, long) => {
    try {
      const url = getFetchCityUrl(lat, long);
      const response = await axios.get(url);
      return response;
    } catch (e) {
      throw e;
    }
  }
};

export default weatherApi;
