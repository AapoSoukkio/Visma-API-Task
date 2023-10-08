// Assuming the function should be named addMissingCompanyInfoById
const axios = require('axios');

// Function to add missing company information by ID
async function createSign(id) {
  const apiUrl = `https://dev-boarding.vismapay.com/boardings/${id}/sign`;
  const headers = {
    'Content-Type': 'application/json',
    Accept: '*/*',
  };
  
  const companyInfo = {
    
  };

  return axios({
    method: 'post', 
    url: apiUrl,
    data: companyInfo, 
    headers: headers,
  });
}

module.exports = {
    createSign,
};