document.addEventListener('DOMContentLoaded', () => {
  fetch('md/cv_hugo_bustos.md')
    .then(response => response.text())
    .then(markdown => {
      const contentElement = document.getElementById('content');
      contentElement.innerHTML = marked.parse(markdown);

      // Función para calcular la edad basada en la fecha de nacimiento
      function calculateAge(birthDate) {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDifference = today.getMonth() - birth.getMonth();

        // Ajustar la edad si el mes de nacimiento aún no ha pasado en el año actual
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        return age;
      };

      // Fecha de nacimiento (puedes cambiar esto para probar con diferentes fechas)
      const birthDate = '1992-11-16';

      // Calcula la edad
      const age = calculateAge(birthDate);

      // Inserta la edad en el div con id "age"
      document.getElementById('age').textContent = `Edad: ${age} años`;
    })
    .catch(error => console.error('Error fetching:', error));
});