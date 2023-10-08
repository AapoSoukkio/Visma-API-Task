const express = require('express');
const router = express.Router();
const boardingService = require('../services/boardingService'); 
const updateCompanyInfoService = require('../services/updateCompanyInfoService'); 
const addMissingCompanyInfoService = require('../services/addMissingCompanyInfoService'); 
const createSignService = require('../services/createSignService'); 

//TODO: Fix the routing problem so you don't need to keep all in here

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Visma Boarding Creator' });
});

/* POST to create boarding. */
router.post('/create-boarding', async function(req, res, next) {
  try {
    const { vatNumber, pricePackage } = req.body;

    // Call the boardingService to handle the API request
    const response = await boardingService.createBoarding({ vatNumber, pricePackage });
    const id = response.data.id;
    
    res.status(200).json({ message: 'Boarding created successfully', id });
  } catch (error) {
    if (error.response.status) {
      console.error('Error Status Code:', error.response.status);
      var statusCode = error.response.status;
    }

    if (error.response.data.validationErrorMessages) {
      console.error('Validation Error Messages:', error.response.data.validationErrorMessages);
    }
    console.error('Error:', error);

    res.status(statusCode || 500).json({ error: error.message });
  }
});

/* PATCH to update company information. */
router.patch('/:id', async function (req, res, next) {
  try {
    const id = req.params.id;
    const data = req.body.formData;

    const response = await updateCompanyInfoService.updateCompanyInfo(id, data);

    console.log('Response:', response.data);

    if (response.status === 200) {
      res.status(200).json({ message: 'Company address information updated successfully' });
    } else {
      console.error('Error Status Code:', response.status);

      if (response.data.validationErrorMessages) {
        console.error('Validation Error Messages:', response.data.validationErrorMessages);
      }

      res.status(response.status).json({ error: 'Company information update failed' });
    }
  } catch (error) {
    console.error('Error:', error);

    if (error.response.status) {
      console.error('Error Status Code:', error.response.status);
      var statusCode = error.response.status;
    }

    res.status(statusCode || 500).json({ error: error.message });
  }
});

/* PUT to add required company info. */
router.put('/:id', async function (req, res, next) {
  try {
    const id = req.params.id;
    const postData = req.body;

    const response = await addMissingCompanyInfoService.addMissingCompanyInfoById(id, postData);

    if (response.status === 200) {
      res.status(200).json({ message: 'Missing company information added successfully' });
    } else {
      console.error('Error Status Code:', response.status);

      if (response.data.validationErrorMessages) {
        console.error('Validation Error Messages:', response.data.validationErrorMessages);
      }

      res.status(response.status).json({ error: 'Adding missing company information failed' });
    }
  } catch (error) {
    console.error('Error:', error);

    if (error.response.status) {
      console.error('Error Status Code:', error.response.status);
      var statusCode = error.response.status;
    }

    res.status(statusCode || 500).json({ error: error.message });
  }
});

/* POST to create sign. */
router.post('/:id/sign', async function(req, res, next) {
  try {
    const id = req.params.id;
    const data = req.body.formData;

    const response = await createSignService.createSign(id, data);

    res.status(200).json({ message: 'Sign created successfully', id });
  } catch (error) {
    if (error.response.status) {
      console.error('Error Status Code:', error.response.status);
      var statusCode = error.response.status;
    }

    if (error.response.data.validationErrorMessages) {
      console.error('Validation Error Messages:', error.response.data.validationErrorMessages);
    }

    res.status(statusCode || 500).json({ error: error.message });
  }
});

module.exports = router;