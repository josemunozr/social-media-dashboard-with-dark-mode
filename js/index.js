const inputSwitch = document.getElementById('inputSwitch')
const dashboard = document.getElementById('dashboard')
inputSwitch.addEventListener('click', () => {
  inputSwitch.classList.toggle('on');
  dashboard.classList.toggle('darkmode')
})