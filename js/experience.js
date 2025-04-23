document.addEventListener("DOMContentLoaded", () => {
    fetch("/workData.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Kunde inte ladda JSON-filen.");
        }
        return response.json();
      })
      .then(data => {
        const container = document.getElementById("experience-container");
        container.classList.add("experience-container"); // Add a class to the container
  
        data.forEach(job => {
          const jobDiv = document.createElement("div");
          jobDiv.classList.add("job-entry");
  
          // Handle "date&year" as string or array
          const dateInfo = Array.isArray(job["date&year"])
            ? job["date&year"].join("<br>")
            : job["date&year"];
  
          // Handle "description" as string or array
          const descriptionInfo = Array.isArray(job.description)
            ? `<ul class="job-description-list">${job.description.map(desc => `<div>${desc}</div>`).join("")}</ul>`
            : `<p class="job-description">${job.description}</p>`;
  
          jobDiv.innerHTML = `
            <h2 class="job-company">${job.companyName}</h2>
            <p class="job-location"><strong>Plats:</strong> ${job.location}</p>
            <p class="job-period"><strong>Period:</strong><br>${dateInfo}</p>
            <div class="job-description-container"><strong>Beskrivning:</strong>${descriptionInfo}</div>
          `;
  
          container.appendChild(jobDiv);
        });
      })
      .catch(error => {
        console.error("Fel vid inläsning av jobberfarenheter:", error);
      });
  });