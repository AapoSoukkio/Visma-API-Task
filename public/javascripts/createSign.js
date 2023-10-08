document.getElementById('create-sign').addEventListener('click', async function () {
    try {
        const boardingIdInput = document.getElementById("boardingId");
        const boardingId = boardingIdInput.value; 

        const vatNumber = document.getElementById("vatNumber").value;
        const pricePackage = document.getElementById("pricePackage").value;
        const companyNameInput = document.getElementById("companyName");
        const companyPhoneInput = document.getElementById("companyPhone");
        const companyAddressStreetInput = document.getElementById("companyAddressStreet");
        const companyPostalInput = document.getElementById("companyPostal");
        const companyCityInput = document.getElementById("companyCity");

        const response = await fetch(`/${boardingId}/sign`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ vatNumber, pricePackage, companyNameInput,
                 companyPhoneInput, companyAddressStreetInput,
                 companyPostalInput, companyCityInput }),
        });

        if (response.ok) {
            const result = await response.json();
            alert(result.message);
        } else {
            console.error('Error:', response.statusText);
            alert('Sign creation failed'); 
        }
    } catch (error) {
        console.error('Network error:', error);
        alert('Network error'); // Handle network errors
    }
});