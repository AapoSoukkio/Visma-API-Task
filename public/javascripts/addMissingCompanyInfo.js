document.getElementById('add-missing-company-info').addEventListener('click', async function () {
    const companyNameInput = document.getElementById("companyName");
    const companyPhoneInput = document.getElementById("companyPhone");
    const companyAddressStreetInput = document.getElementById("companyAddressStreet");
    const companyPostalInput = document.getElementById("companyPostal");
    const companyCityInput = document.getElementById("companyCity");
    const boardingIdInput = document.getElementById("boardingId");
    const createSignDiv = document.getElementById("create-sign-div");
    const boardingId = boardingIdInput.value; 

    const postData = {
        companyName: companyNameInput.value,
        companyPhone: companyPhoneInput.value,
        companyAddressStreet: companyAddressStreetInput.value,
        companyPostal: companyPostalInput.value,
        companyCity: companyCityInput.value
    };

    try {
        const response = await fetch(`/${boardingId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData) 
        });

        if (response.ok) {
            const result = await response.json();
            alert(result.message);
            createSignDiv.style.display = "block";
        } else {
            console.error('Error:', response.statusText);
            alert('Company information adding failed'); 
        }
    } catch (error) {
        console.error('Network error:', error);
        alert('Network error'); 
    }
});


