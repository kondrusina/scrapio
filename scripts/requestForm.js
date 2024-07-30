document.addEventListener('DOMContentLoaded', (event) => {
    const checkbox = document.querySelector('.robot__input');
    const sendButton = document.querySelector('.button-send');

    function updateButtonState() {
      if (checkbox.checked) {
        sendButton.classList.add('active');
      } else {
        sendButton.classList.remove('active');
      }
    }
    checkbox.addEventListener('change', updateButtonState);
    updateButtonState();
  });

//FORMA2
function handleSubmit(event) {
    event.preventDefault(); 
    document.getElementById('initialForm').style.display = 'none'; 
    document.getElementById('confirmForm').style.display = 'flex'; 
}

function goToHomePage() {
    window.location.href = 'index.html'; 
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('initialForm').addEventListener('submit', handleSubmit);
});
