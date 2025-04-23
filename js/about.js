document.addEventListener("DOMContentLoaded", () => {
    fetch("/aboutData.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Kunde inte ladda JSON-filen.");
            }
            return response.json();
        })
        .then(data => {
            const aboutContainer = document.getElementById("about-container");
            aboutContainer.classList.add("about-container");

            // Assuming the JSON contains an array with one object
            const aboutText = data[0].about;

            // Create a paragraph element for the about text
            const aboutParagraph = document.createElement("p");
            aboutParagraph.classList.add("about-text");
            aboutParagraph.textContent = aboutText;

            // Append the paragraph to the container
            aboutContainer.appendChild(aboutParagraph);
        })
        .catch(error => {
            console.error("Fel vid inläsning av about-text:", error);
        });
});