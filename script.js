document.getElementById('loginBtn').addEventListener('click', function() {
    const role = document.getElementById('role').value;
    const password = document.getElementById('password').value;

    // Predefined passwords
    const passwords = {
        forest: 'forest123',
        state: 'state123',
        country: 'country123'
    };

    // Check if the password matches the selected role
    if (password === passwords[role]) {
        if (role === 'forest') {
            window.location.href = 'forest_officer.html';
        } else if (role === 'state') {
            window.location.href = 'state_forest_officer.html';
        } else if (role === 'country') {
            window.location.href = 'country_head_forest_officer.html';
        }
    } else {
        alert('Password Mismatch! Please try again.');
    }
});



