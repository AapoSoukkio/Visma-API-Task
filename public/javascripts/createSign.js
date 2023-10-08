document.getElementById('create-sign').addEventListener('click', async function () {
    try {
        const boardingIdInput = document.getElementById("boardingId");
        const boardingId = boardingIdInput.value;

        const response = await fetch(`/${boardingId}/sign`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
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