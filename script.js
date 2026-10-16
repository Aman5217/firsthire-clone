const jobs = [
    { title: "Associate Frontend Developer", company: "FirstHire", location: "Mumbai (Full-time)", match: "95% Match", desc: "Build clean, fast responsive user interfaces and modern web apps." },
    { title: "React Frontend Engineer", company: "TechFlow Labs", location: "Remote", match: "88% Match", desc: "Develop scalable UI components using React, Redux, and Tailwind." },
    { title: "UI/UX Web Developer", company: "RecruitAI", location: "Bangalore", match: "82% Match", desc: "Design intuitive user dashboards and workflow automation tools." }
];

const jobGrid = document.getElementById('job-grid');
const searchInput = document.getElementById('search-jobs');

function displayJobs(filteredJobs) {
    jobGrid.innerHTML = '';
    filteredJobs.forEach(job => {
        const card = document.createElement('div');
        card.classList.add('job-card');
        card.innerHTML = `
            <span class="match-badge">${job.match}</span>
            <h3>${job.title}</h3>
            <p><strong>${job.company}</strong> • ${job.location}</p>
            <p>${job.desc}</p>
            <button class="apply-btn" onclick="alert('Application submitted successfully to ${job.company}!')">Quick Apply</button>
        `;
        jobGrid.appendChild(card);
    });
}

displayJobs(jobs);

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = jobs.filter(j => j.title.toLowerCase().includes(term) || j.company.toLowerCase().includes(term));
    displayJobs(filtered);
});