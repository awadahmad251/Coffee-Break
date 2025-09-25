// form validation
document.querySelector('#contact-us form').addEventListener('submit', function(event) {
    event.preventDefault(); // stop default submit first

    const usernamePattern = /^[a-zA-Z]{3,20}$/; 
    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|org)$/; 
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/~`-]).{8,}$/;

    const name = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Empty check
    if (!name || !email || !password || !subject || !message) {
        alert('⚠️ Please fill out all fields.');
        return;
    }

    // Username check
    if (!usernamePattern.test(name)) {
        alert('⚠️ Username must be 3-20 alphabetic characters only.');
        return;
    }

    // Email check
    if (!emailPattern.test(email)) {
        alert('⚠️ Please enter a valid email address (must end with .com or .org).');
        return;
    }

    // Password check
    if (!passwordPattern.test(password)) {
        alert('⚠️ Password must be at least 8 characters and include: \n- One uppercase letter \n- One number \n- One special character');
        return;
    }

    // ✅ Success
    alert('✅ Thank you for contacting us! We will get back to you shortly.');
    this.reset(); // now it clears the form
});
