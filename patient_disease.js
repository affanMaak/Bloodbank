document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("patientForm");

    // Function to generate unique Patient ID starting with PID
    function generatePatientID() {
        const randomNum = Math.floor(10000 + Math.random() * 90000); // Random 5-digit number
        return `PID-${randomNum}`;
    }

    // Function to generate unique Blood ID starting with BID
    function generateBloodID() {
        const randomNum = Math.floor(10000 + Math.random() * 90000); // Random 5-digit number
        return `BID-${randomNum}`;
    }

    // Set the generated IDs in the input fields
    document.getElementById("patientId").value = generatePatientID();
    document.getElementById("bloodId").value = generateBloodID();

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const patientID = document.getElementById("patientId").value;
        const patientName = document.getElementById("patientName").value;
        const bloodGroup = document.getElementById("bloodGroup").value;
        const patientDisease = document.getElementById("patientDisease").value;
        const bloodID = document.getElementById("bloodId").value;
        const patientContact = document.getElementById("patientContact").value;

        // Validate form values
        if (!patientName || !bloodGroup || !patientDisease || !patientContact) {
            alert("All fields are required.");
            return;
        }

        // Display confirmation message
        const confirmationDetails = `
            Patient ID: ${patientID} <br>
            Patient Name: ${patientName} <br>
            Blood Group: ${bloodGroup} <br>
            Patient Disease: ${patientDisease} <br>
            Blood ID: ${bloodID} <br>
            Patient Contact: ${patientContact}
        `;
        document.getElementById('confirmationDetails').innerHTML = confirmationDetails;
        document.getElementById('confirmation').style.display = 'block';
        form.reset();

        // Generate new IDs for the next registration
        document.getElementById("patientId").value = generatePatientID();
        document.getElementById("bloodId").value = generateBloodID();
    });
});
