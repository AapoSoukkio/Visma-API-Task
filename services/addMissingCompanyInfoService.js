const axios = require('axios');

// Function to add missing company information by ID
async function addMissingCompanyInfoById(id, data) {
  const apiUrl = `https://dev-boarding.vismapay.com/boardings/${id}`;
  const headers = {
    'Content-Type': 'application/json',
    Accept: '*/*',
  };

  console.log('Value of a specific property from data:', data.companyName);

  // Hardcoded data for adding missing company info
  const missingCompanyInfo = {
    formData: {
      businessType: 5999,
      estimatedTotalRevenue: 1300,
      estimatedServiceRevenue: 4000,
      averageServicePurchase: 150,
      mostExpensiveServicePurchase: 110000,
      realBeneficialOwners: false,
      isPep: true,
      isRca: true,
      signatories: [
        {
          firstname: "Kalle",
          phone: "123456",
          email: "test@paybyway.com",
          lastname: "Koistinen",
        },
      ],
      beneficialOwners: [
        {
          firstname: "Lauri",
          dateOfBirth: "1989-02-01",
          shareAmount: 15,
          lastname: "Lupsakka",
          country: "FI",
          pic: "111111-111C",
        },
      ],
      marketingName: "Something",
      websiteUrl: "https://www.aaposoukkio.com",
      supportEmail: "test@paybyway.com",
      supportPhone: "666",
      customerRepresenterFirstname: "NoNameMan",
      customerRepresenterLastname: "gsdg",
      customerRepresenterPhone: "666",
      customerRepresenterEmail: "test@paybyway.com",
      bankIban: "FI2356200920375952",
      bankOwner: "Nalle",
      bankName: "Nordea",
      ...data,
      companyBillingPostal: "34897",
      companyBillingCity: "AaponKAupunki",
      companyBillingAddressStreet: "SomeAddress",
      companyBillingEmail: "test@paybyway.com",
      eInvoiceAddress: "WhatAdress",
      eInvoiceProcessor: "BestProcessor",
    },
  };

  return axios({
    method: 'put', 
    url: apiUrl,
    data: missingCompanyInfo, 
    headers: headers,
  });
}

module.exports = {
  addMissingCompanyInfoById,
};