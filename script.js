document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('update-form');
  const textarea = document.getElementById('update-text');
  const updateList = document.getElementById('update-list');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const updateText = textarea.value;
    if (updateText) {
      const updateItem = document.createElement('li');
      updateItem.textContent = updateText;
      updateList.appendChild(updateItem);
      textarea.value = '';
    }
  });
});
