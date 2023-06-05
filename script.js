document.addEventListener('DOMContentLoaded', function() {
  const statusElement = document.getElementById('status');

  const serverIP = '5.135.54.213';
  const serverPort = 25607;

  function checkServerStatus() {
    const url = `https://api.mcsrvstat.us/2/5.135.54.213:25607`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.online) {
          statusElement.textContent = `Server is online - ${data.players.online} players online`;
        } else {
          statusElement.textContent = 'Server is offline';
        }
      })
      .catch(error => {
        statusElement.textContent = 'Failed to fetch server status';
        console.error(error);
      });
  }

  checkServerStatus();
});
