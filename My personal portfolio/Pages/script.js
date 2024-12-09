// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    const thankYouMessageDiv = document.getElementById('thankYouMessage');

    // Listen for the form submission event
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting and reloading the page
        event.preventDefault();

        // Get the values from the input fields
        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const email = document.getElementById('email').value;

        // Display a thank you message
        thankYouMessageDiv.innerHTML = `Thank you, ${firstName} ${lastName}! We have received your information.`;

        // Optionally, log the email in the console or handle further processing
        console.log(`Email: ${email}`);
        
        // Clear form after submission
        form.reset();
    });
});
