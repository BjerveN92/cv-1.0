document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("projects-container");

    // Fetch project data from the JSON file
    fetch("./data/projectData.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch project data");
            }
            return response.json();
        })
        .then(projects => {
            // Sort projects by ID (optional, in case the order matters)
            projects.sort((a, b) => a.id - b.id);

            // Dynamically create project links
            projects.forEach(project => {
                const projectDiv = document.createElement("div");
                projectDiv.classList.add("project-entry");

                projectDiv.innerHTML = `
                    <h3>${project.name}</h3>
                    <p><strong>Beskrivning:</strong> ${project.description || "Ingen beskrivning tillgänglig."}</p>
                    <a href="${project.url}" target="_blank">${project.url}</a>
                `;

                projectsContainer.appendChild(projectDiv);
            });
        })
        .catch(error => {
            console.error("Error loading project data:", error);
            projectsContainer.innerHTML = "<p>Failed to load projects. Please try again later.</p>";
        });
});