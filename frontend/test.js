const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://shazam-core.p.rapidapi.com/v1/search/suggest',
  params: {query: 'mask'},
  headers: {
    'x-rapidapi-key': 'b4f2777842msha16a1eae32abfdap106cd5jsn5781e1e77e6b',
    'x-rapidapi-host': 'shazam-core.p.rapidapi.com'
  }
};

try {
	const response = axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}