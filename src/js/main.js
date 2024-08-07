document.addEventListener('DOMContentLoaded', () => {
  fetch('md/cv_hugo_bustos.md')
    .then(response => response.text())
    .then(markdown => {
      const contentElement = document.getElementById('content');
      contentElement.innerHTML = marked.parse(markdown);
    })
    .catch(error => console.error('Error fetching:', error));
});