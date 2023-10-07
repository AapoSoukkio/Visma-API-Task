document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("boarding-form"); 

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); 

        const vatNumber = document.getElementById("vatNumber").value;
        const pricePackage = document.getElementById("pricePackage").value;

        try {
            // POST request to the server
            const response = await fetch('/create-boarding', { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ vatNumber, pricePackage }),
            });

            if (response.ok) {
                const result = await response.json();
                alert(result.message); // Show a simple alert
            } else {
                alert("Boarding creation failed: " + response.statusText); // Show an alert for the error
            }
        } catch (error) {
            // Handle network errors by showing an error message
            console.error(error);
            alert("Network error");
        }
    });
});