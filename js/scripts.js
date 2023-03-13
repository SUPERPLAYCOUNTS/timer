const themesDropdown = document.querySelector('.themes');
const selectedTheme = localStorage.getItem('theme') || 'light'; // use the saved theme or default to light

// set the initial theme
document.documentElement.classList.add(selectedTheme);

themesDropdown.addEventListener('change', (event) => {
  if (event.target.nodeName === 'INPUT') {
    console.log('asdas');
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(event.target.value);
    localStorage.setItem('theme', event.target.value); // save the selected theme to localStorage
  }
});
