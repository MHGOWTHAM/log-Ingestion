const apiUrl = 'http://localhost:3000/logs';

function searchLogs() {
    const startTimestamp = document.getElementById('startTimestamp').value;
    const endTimestamp = document.getElementById('endTimestamp').value;
    const level = document.getElementById('level').value;

    fetch(`${apiUrl}?startTimestamp=${startTimestamp}&endTimestamp=${endTimestamp}&level=${level}`)
        .then(response => response.json())
        .then(logs => displayLogs(logs))
        .catch(error => console.error('Error:', error));
}

function displayLogs(logs) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';

    if (logs.length === 0) {
        resultContainer.innerHTML = '<p>No logs found.</p>';
        return;
    }

    const logList = document.createElement('ul');
    logs.forEach(log => {
        const logItem = document.createElement('li');
        logItem.textContent = `ID: ${log.id}, Level: ${log.level}, Message: ${log.message}, Timestamp: ${log.timestamp}`;
        logList.appendChild(logItem);
    });

    resultContainer.appendChild(logList);
}