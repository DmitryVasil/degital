// try {
//   if (localStorage.getItem('theme') === 'dark')
//       document.querySelector('html').classList.add('dark');
// } catch (err) {}

document.querySelector('.theme-toggle').addEventListener('click', (event) => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme')
  }
  else {
    localStorage.setItem('theme', 'dark')
  }
  addDarkTheme();
})

const addDarkTheme = () => {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('html').classList.add('dark');
      document.querySelector('.theme-toggle span').classList.add('dark')
      document.querySelector('.theme-icon-light').style=''
    }
    else {
      document.querySelector('html').classList.remove('dark');
      document.querySelector('.theme-toggle span').classList.remove('dark')
    }
        
  } catch (err) {}
}

addDarkTheme();