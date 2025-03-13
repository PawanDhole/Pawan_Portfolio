document.addEventListener("DOMContentLoaded", function () {
    console.log("Pawan's Portfolio is Ready!");
});
document.getElementById("visitorForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("visitorName").value;
    let email = document.getElementById("visitorEmail").value;
    let message = document.getElementById("visitorMessage").value;

    alert(`Thank you, ${name}! We will contact you at ${email}.`);
    
    document.getElementById("visitorForm").reset();
    
    var visitorModal = new bootstrap.Modal(document.getElementById('visitorModal'));
    visitorModal.hide();
});

