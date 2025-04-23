document.addEventListener("DOMContentLoaded", () => {
    // Select the main content section where the container will be added
    const mainContent = document.querySelector(".main-content");

    // Create the education-container dynamically
    const educationContainer = document.createElement("div");
    educationContainer.id = "education-container";
    educationContainer.classList.add("education-container");

    // Add a heading to the container
    const heading = document.createElement("h2");
    heading.textContent = "Tidigare utbildningar";
    educationContainer.appendChild(heading);

    // Append the container to the main content
    mainContent.appendChild(educationContainer);

    // Fetch education data and populate the container
    fetch("/data/educationData.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch education data");
            }
            return response.json();
        })
        .then(data => {
            data.forEach(education => {
                // Create a container for each education entry
                const educationDiv = document.createElement("div");
                educationDiv.classList.add("education-entry");

                // Add content to the education entry
                educationDiv.innerHTML = `
                    <h2>${education.name}</h2>
                    <p><strong>Plats:</strong> ${education.location}</p>
                    <p><strong>Datum:</strong> ${education["date&year"]}</p>
                    <p>${education.description}</p>
                `;

                // Append the entry to the education-container
                educationContainer.appendChild(educationDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching education data:", error);
            educationContainer.innerHTML += "<p>Failed to load education data.</p>";
        });
});