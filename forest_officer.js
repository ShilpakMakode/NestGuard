setInterval(() => {
    fetchData('temperature', 'humidity', 'https://example.com/api/periyar');
}, 5000);

function fetchData(tempId, humId, apiUrl) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById(tempId).innerText = data.temperature + ' °C';
            document.getElementById(humId).innerText = data.humidity + ' %';
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById(tempId).innerText = 'Error';
            document.getElementById(humId).innerText = 'Error';
        });
}

document.getElementById('logoutBtn').addEventListener('click', function() {
    window.location.href = 'index.html';
});