# Project: Visma-API-Task

Made by: Aapo Soukkio

***

## Purpose of this project

This is my solution for the pre-assignment for Visma Pay Software developer position

## About the project 

This is a simple web-page that sends and takes hold of the values provided by Visma Pay API.
Main purpose of this project is to make somekind of contract with their service by providing company information and at last step make a
virtual signature to get further information by email. 

## Technologies Used

- Server-side Node.js with Express.js 
- Client-side: Pug (formerly Jade), HTML, CSS:
- Other tools: Postman, Swagger tools, VS Code


## Features

The application provides the following features:

### Create Contract

- Using the POST (/) method, users can create contracts.
- A button is available to submit contract data.
- Mandatory fields from the createboardingmodel are included as inputs.
    - VAT number (vatNumber) is set to "2486559-4".
    - Price package (pricePackage) is set to "power".
- Successful contract creation is confirmed.

### Update Company Address

- Contracts created in the first step can have their company address details updated.
- An HTML form contains fields for:
    - Company name (companyName)
    - Company phone number (companyPhone)
    - Street address (companyAddressStreet)
    - Postal code (companyPostal)
    - City (companyCity)
- Users can submit the form by clicking a button.
- The system handles successful field updates and displays validation errors when necessary.

### Add Missing Company Information

- Using the PUT (/{id}) method, users can add missing required company information.
- Fields are not displayed on any form but have been hardcoded.
- Required values are set
- Required fields have been confirmed from the API description.
- All these actions are performed without reloading the page using AJAX.

## How to run the project

Here are the steps to run the project:

1. Clone the project from GitHub to your local machine

2. Navigate to the project directory

3. Install the project's dependencies:
    ```bash
    npm install
    ```

4. To start the development server, run:
    ```bash
    npm start
    ```

    This will launch the application locally. You can access it in your web browser at http://localhost:3000.

6. To build the project for production, run:
    ```bash
    npm run build
    ```

## Other notes

This is the first version of the app and it can be improved in various fields like: 
- Implementing unit and integration testing 
- Adding responsive layout
- Improving user interface
- Reorganizing the codebase with scalability in mind 
- Improving routing


## Helpful Links

> **Following material will help to understand this project and learn more about Blazor WASM.**


1. [Express.js](https://expressjs.com/en/starter/installing.html)
