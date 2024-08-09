// Open and close modals
function openModal() {
    document.getElementById('appointmentModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('appointmentModal').style.display = 'none';
}

function openBookingModal(name, email) {
    document.getElementById('specialistName').value = name;
    document.getElementById('specialistEmail').value = email;
    document.getElementById('bookingModal').style.display = 'block';
}

function closeBookingModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

// Close modals when clicking outside the modal content
window.onclick = function(event) {
    if (event.target === document.getElementById('appointmentModal')) {
        closeModal();
    }
    if (event.target === document.getElementById('bookingModal')) {
        closeBookingModal();
    }
}
// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Close the booking modal first
    closeBookingModal();

    // Display the thank you message after a short delay
    setTimeout(() => {
        alert('Thank you for booking your appointment. You will be contacted shortly.');
    }, 500); // 0.5 seconds delay

    // Optionally, reset the form fields
    this.reset();
});

