document.addEventListener("DOMContentLoaded", function () {
    const updateForm = document.getElementById("update-company-form");
    const addMissingCompanyInfoDiv = document.getElementById("add-missing-information-div");
    const boardingIdInput = document.getElementById("boardingId");
    const companyNameInput = document.getElementById("companyName");
    const companyPhoneInput = document.getElementById("companyPhone");
    const companyAddressStreetInput = document.getElementById("companyAddressStreet");
    const companyPostalInput = document.getElementById("companyPostal");
    const companyCityInput = document.getElementById("companyCity");

    updateForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const boardingId = boardingIdInput.value; 
        const companyName = companyNameInput.value;
        const companyPhone = companyPhoneInput.value;
        const companyAddressStreet = companyAddressStreetInput.value;
        const companyPostal = companyPostalInput.value;
        const companyCity = companyCityInput.value;

        const data = {
            companyName,
            companyPhone,
            companyAddressStreet,
            companyPostal,
            companyCity
        };

        try {
            const response = await fetch(`/${boardingId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                alert(result.message);
                addMissingCompanyInfoDiv.style.display = "block";
            } else {
                console.error("Error:", response.statusText);
                alert("Update failed: " + response.statusText);
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("Network error");
        }
    });
});