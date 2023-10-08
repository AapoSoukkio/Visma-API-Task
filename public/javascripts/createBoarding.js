document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("boarding-form"); 
    const updateCompanyForm = document.getElementById("update-company-form");
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
                const boardingIdInput = document.getElementById("boardingId");

                if (boardingIdInput) {
                    boardingIdInput.value = result.id;
                  }

                console.log(result.id);
                alert(result.message);

                // Show the hidden form
                updateCompanyForm.style.display = "block";
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