document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("boarding-form"); 
    const hiddenForm = document.getElementById("hidden-form");
    const createBoardingButton = document.getElementById("create-boarding-button");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); 

        const vatNumber = document.getElementById("vatNumber").value;
        const pricePackage = document.getElementById("pricePackage").value;

        try {
            // Disable the button when the create boarding is clicked
            createBoardingButton.disabled = true;

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
                alert(result.message);

                // Show the hidden form
                hiddenForm.style.display = "block";
            } else {
                alert("Boarding creation failed: " + response.statusText);
            }
        } catch (error) {
            // Handle network errors by showing an error message
            console.error(error);
            alert("Network error");
        }
    });
});