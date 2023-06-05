// Fetch server status and player count from API
fetch('https://api.mcsrvstat.us/2/5.135.54.213:25607') // Replace with your server IP and port
  .then(response => response.json())
  .then(data => {
    const statusElement = document.getElementById("status-text");

    // Check if the server is online
    if (data.online) {
      const playerCount = data.players.online;
      statusElement.textContent = `Players online: ${playerCount}/${data.players.max}`;
      statusElement.classList.add("operational");
    } else if (data.offline) {
      statusElement.textContent = "OFFLINE";
      statusElement.classList.add("offline");
    } else if (data.motd.clean === "WHITELISTED") {
      statusElement.textContent = "UNDER MAINTENANCE";
      statusElement.classList.add("maintenance");
    }
  })
  .catch(error => {
    const statusElement = document.getElementById("status-text");
    statusElement.textContent = "Error fetching server status";
    statusElement.classList.add("offline");
    console.error(error);
  });
