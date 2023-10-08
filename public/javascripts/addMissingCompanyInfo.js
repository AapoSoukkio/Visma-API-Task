document.getElementById('add-missing-company-info').addEventListener('click', function () {
    const boardingIdInput = document.getElementById("boardingId");
    const createSignDiv = document.getElementById("create-sign-div");
    const boardingId = boardingIdInput.value; 

    addMissingCompanyInfo(boardingId, createSignDiv);
});

// Function to send a PUT request to the server
async function addMissingCompanyInfo(id, createSignDiv) {
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
            // Show hiden form
            createSignDiv.style.display = "block"; 
        } else {
            console.error('Error:', response.statusText);
            alert('Company information adding failed'); 
        }
    } catch (error) {
        console.error('Network error:', error);
        alert('Network error'); // Handle network errors
    }
}
