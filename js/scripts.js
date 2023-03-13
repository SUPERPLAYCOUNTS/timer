const themesDropdown = document.querySelector('.themes');
const savedTheme = localStorage.getItem('theme') || 'light'; // use the saved theme or default to light
document.documentElement.classList.add(savedTheme);

// find the radio button that matches the saved theme
const selectedRadio = themesDropdown.querySelector(`input[value="${savedTheme}"]`);
if (selectedRadio) {
  selectedRadio.checked = true;
}

themesDropdown.addEventListener('change', (event) => {
  if (event.target.nodeName === 'INPUT') {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(event.target.value);
    localStorage.setItem('theme', event.target.value); // save the selected theme to localStorage
  }
});
