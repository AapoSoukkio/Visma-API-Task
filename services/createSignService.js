const axios = require('axios');

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