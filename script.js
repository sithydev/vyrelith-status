// Fetch server status and player count from API
fetch('https://api.mcsrvstat.us/2/5.135.54.213:25607') // Replace with your server IP and port
  .then(response => response.json())
  .then(data => {
    const statusElement = document.getElementById("status-text");
    const playerCountElement = document.getElementById("player-count");

    // Check if the server is online
    if (data.online) {
      const playerCount = data.players.online;
      statusElement.textContent = `OPERATIONAL`;
      statusElement.classList.add("operational");
      playerCountElement.textContent = `Players online: ${playerCount}/${data.players.max}`;
    } else if (data.offline) {
      statusElement.textContent = "OFFLINE";
      statusElement.classList.add("offline");
      playerCountElement.textContent = "";
    } else if (data.motd.clean === "WHITELISTED") {
      statusElement.textContent = "UNDER MAINTENANCE";
      statusElement.classList.add("maintenance");
      playerCountElement.textContent = "";
    }
  })
  .catch(error => {
    const statusElement = document.getElementById("status-text");
    const playerCountElement = document.getElementById("player-count");
    statusElement.textContent = "Error fetching server status";
    statusElement.classList.add("offline");
    playerCountElement.textContent = "";
    console.error(error);
  });
document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  body.classList.add('fade-in'); // Add the 'fade-in' class immediately
});
