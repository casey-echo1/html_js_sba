
// Function to handle form submission
function handleRatingSubmit(event) {
    event.preventDefault();
    const rating = document.getElementById('shoe-love').value;
    if (rating && rating > 7) {
        alert(`Thank you for rating your love for shoes as ${rating} out of 10!`);
    } if (rating) {
        alert('Let\s try that again; choose a higher number please');
    }
     else {
        alert('Please select a rating before submitting.');
    }
}


// Event listener for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to the form
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleRatingSubmit);
    }

});
