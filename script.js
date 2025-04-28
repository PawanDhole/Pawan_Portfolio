document.addEventListener("DOMContentLoaded", function () {
    console.log("Pawan's Portfolio is Ready!");

    // Door Animation
    setTimeout(() => {
        document.getElementById('door-overlay').classList.add('open');
        setTimeout(() => {
            document.getElementById('door-overlay').style.display = 'none'; // Completely hide the door after it fades
        }, 1500); // After door animation finishes (1.5s for both sliding and fading)
    }, 500); // slight delay to feel smooth

    // Form Submission
    document.getElementById("visitorForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        let name = document.getElementById("visitorName").value;
        let email = document.getElementById("visitorEmail").value;
        let message = document.getElementById("visitorMessage").value;

        alert(`Thank you, ${name}! We will contact you at ${email}.`);

        // Now submit the form manually
        this.submit();
    });
});
