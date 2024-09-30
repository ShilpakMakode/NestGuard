setInterval(() => {
    const forests = ['forest1', 'forest2', 'forest3', 'forest4', 'forest5'];
    const apiUrls = [
        'https://example.com/api/forest1',
        'https://example.com/api/forest2',
        'https://example.com/api/forest3',
        'https://example.com/api/forest4',
        'https://example.com/api/forest5'
    ];

    forests.forEach((forest, index) => {
        fetchData('temp' + (index + 1), 'hum' + (index + 1), apiUrls[index]);
    });
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