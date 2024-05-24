document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const reason = document.getElementById('options');
    const selectedReason = reason.options[reason.selectedIndex].text; // Get the text of the selected option
    
    // Validate form values (additional validation can be added as needed)
    if (!name || !email || !phone || !date || !time || !selectedReason) {
        alert("All fields are required.");
        return;
    }

    // Display confirmation message
    const confirmationDetails = `
        Name: ${name} <br>
        Email: ${email} <br>
        Phone: ${phone} <br>
        Date: ${date} <br>
        Time: ${time} <br>
        Reason: ${selectedReason} <!-- Include the selected dropdown option text -->
    `;
    document.getElementById('confirmationDetails').innerHTML = confirmationDetails;
    document.getElementById('confirmation').style.display = 'block';
    document.getElementById('appointmentForm').reset();
});
