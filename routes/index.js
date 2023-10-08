const express = require('express');
const router = express.Router();
const boardingService = require('../services/boardingService'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Visma Boarding Creator' });
});

/* POST to create boarding. */
router.post('/create-boarding', async function(req, res, next) {
  try {
    // Extract form data from the request body
    const { vatNumber, pricePackage } = req.body;

    console.log('Request Payload:', { vatNumber, pricePackage });

    // Call the boardingService to handle the API request
    const response = await boardingService.createBoarding({ vatNumber, pricePackage });

    console.log('Response:', response.data);
    
    const id = response.data.id;
    res.status(200).json({ message: 'Boarding created successfully', id });
  } catch (error) {
    if (error.response && error.response.status) {
      console.error('Error Status Code:', error.response.status);
      var statusCode = error.response.status;
    }

    if (error.response && error.response.data.validationErrorMessages) {
      console.error('Validation Error Messages:', error.response.data.validationErrorMessages);
    }
    console.error('Error:', error);

    res.status(statusCode || 500).json({ error: error.message });
  }
});

module.exports = router;