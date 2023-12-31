const axios = require('axios');

async function updateCompanyInfo(id, formData) {
    const apiUrl = `https://dev-boarding.vismapay.com/boardings/${id}`;
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