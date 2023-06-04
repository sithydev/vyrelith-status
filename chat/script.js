document.addEventListener("DOMContentLoaded", function() {
  var chatWindow = document.getElementById("chat-window");
  var messageInput = document.getElementById("message");
  var sendButton = document.getElementById("send-btn");
  
  sendButton.addEventListener("click", function() {
    var message = messageInput.value.trim();
    
    if (message !== "") {
      var newMessage = document.createElement("p");
      newMessage.textContent = message;
      chatWindow.appendChild(newMessage);
      
      // Scroll to the bottom of the chat window
      chatWindow.scrollTop = chatWindow.scrollHeight;
      
      // Clear the input field
      messageInput.value = "";
    }
  });
  
  // Send message on pressing Enter key
  messageInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      sendButton.click();
      event.preventDefault();
    }
  });
});
