const axios = require('axios');

// Function to update company information
async function updateCompanyInfo(id, formData) {
    const apiUrl = `https://boarding.vismapay.com/boardings/${id}`;
    const headers = {
      'Content-Type': 'application/json',
      Accept: '*/*',
    };
  
    return axios({
      method: 'patch',
      url: apiUrl,
      headers: headers,
      data: {
        formData: formData, 
      },
    });
  }
  
  module.exports = {
    updateCompanyInfo,
  };