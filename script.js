
function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const school = document.getElementById('school').value;
    const degree = document.getElementById('degree').value;
    const graduationDate = document.getElementById('graduation-date').value;

    const resumePreview = document.getElementById('resume-preview');

    resumePreview.innerHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Education</h3>
        <p>School: ${school}</p>
        <p>Degree: ${degree}</p>
        <p>Graduation Date: ${graduationDate}</p>
    `;
}