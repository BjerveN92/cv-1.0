document.addEventListener("DOMContentLoaded", () => {
    fetch("./data/aboutData.json")
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
            const aboutTexts = data[0].about;

            // Loop through each string in the array
            aboutTexts.forEach((text, index) => {
                // Replace \n with <br> for HTML line breaks
                const formattedText = text.replace(/\n/g, "<br>");

                // Create a paragraph element for each string
                const aboutParagraph = document.createElement("p");
                aboutParagraph.classList.add("about-text");
                aboutParagraph.innerHTML = formattedText; // Use innerHTML to render <br> tags

                // Add a gap between paragraphs except for the last one
                if (index < aboutTexts.length - 1) {
                    aboutParagraph.style.marginBottom = "20px"; // Add gap
                }

                // Append the paragraph to the container
                aboutContainer.appendChild(aboutParagraph);
            });
        })
        .catch(error => {
            console.error("Fel vid inläsning av about-text:", error);
        });
});