document.getElementById('add-missing-company-info').addEventListener('click', function () {
    const boardingIdInput = document.getElementById("boardingId");
    const boardingId = boardingIdInput.value; 

    updateCompanyInfo(boardingId);
});

// Function to send a PUT request to the server
async function updateCompanyInfo(id) {
    try {
        console.log("ID: " + id);
        const response = await fetch(`/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const result = await response.json();
            alert(result.message); 
        } else {
            console.error('Error:', response.statusText);
            alert('Company information update failed'); 
        }
    } catch (error) {
        console.error('Network error:', error);
        alert('Network error'); // Handle network errors
    }
}
