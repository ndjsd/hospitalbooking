// Patient Form
const patientForm = document.getElementById('patient-form');
const patientList = document.getElementById('patient-list');

patientForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const gender = document.getElementById('gender').value;
    const contact = document.getElementById('contact').value.trim();
    const language = document.getElementById('language').value;

    const patientCard = document.createElement('div');
    patientCard.className = 'card';
    patientCard.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        ${language ? <p><strong>Preferred Language:</strong> ${language}</p> : ''}
    `;

    patientList.appendChild(patientCard);

    // Reset form
    patientForm.reset();
});

// Appointment Form
const appointmentForm = document.getElementById('appointment-form');

appointmentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const patientName = document.getElementById('patient-name').value.trim();
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('appointment-date').value;
    const time = document.getElementById('appointment-time').value;

    if (patientName && doctor && date && time) {
        alert(Appointment booked for ${patientName} with ${doctor} on ${date} at ${time}.);
        appointmentForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
