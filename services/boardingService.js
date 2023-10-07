const axios = require('axios');

// Function to create a boarding
async function createBoarding({ vatNumber, pricePackage }) {
  const apiUrl = 'https://boarding.vismapay.com/boardings/';
  const requestData = {
    pricePackage,
    vatNumber,
  };
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  return axios({
    method: 'post',
    url: apiUrl,
    data: requestData,
    headers: headers,
  });
}

module.exports = {
  createBoarding,
};