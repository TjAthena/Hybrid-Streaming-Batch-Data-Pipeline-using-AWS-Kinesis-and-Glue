// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons with the class 'button-type-rtvv'
    const buttons = document.querySelectorAll('.button-type-rtvv');

    // Select all info boxes
    const infoBoxes = document.querySelectorAll('.info-container-rtvv');

    // Add event listeners to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Hide all info boxes
            infoBoxes.forEach(box => box.classList.add('hidden-container-rtvv'));

            // Show the info box corresponding to the clicked button
            const selectedBox = document.getElementById(`info-${button.id}`);
            selectedBox.classList.remove('hidden-container-rtvv');
        });
    });
});
