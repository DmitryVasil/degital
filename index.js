function getDayInfo(newDate) {
  const formatDate = newDate.split('.').reverse().join('-');
  const date = new Date(formatDate);
  const numberDay = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dayTitle = ['Воскресенье', "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const monthTitle = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября','Декабря'];
  const currentDate = date.getDate();
  const firstOfMonth = new Date(year, month === 1 ? month - 1 : month, 1);
  let day = firstOfMonth.getDay() || 6;
  day = day === 1 ? 0 : day;
  if (day) day--;
  let diff = 7 - day;
  const lastOfMonth = new Date(year, month, 0);
  if (lastOfMonth.getDay() === 1 || firstOfMonth.getDay() === 0) {
    diff--;
  }
  const result = Math.ceil((currentDate - diff) / 7) + 1;
  return `${dayTitle[numberDay]}, ${result} неделя ${monthTitle[month]} ${year} года`;
}



const list = document.getElementById('tables')
tables.forEach(el => {
  list.innerHTML += `
    <li class="furniture__item">
    <picture class="furniture__pict">
      <img class="furniture__img" src="${el.img}">
    </picture>
      <span class="furniture__descr">${el.descr}</span>
      <span class="furniture__descr">${getDayInfo(el.date)}</span>
      <button onclick="openForm()" id="open-form" class="furniture__button">Купить</button>
    </li>
  `
})

function openForm () {
  document.getElementById('wrap-form').classList.add('active')
}

// document.getElementById('open-form').addEventListener('click', () => {
//   document.getElementById('wrap-form').classList.add('active')
// })

document.getElementById('buy').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('form').classList.remove('active')
  alert('Поздравляем с приобретением товара')
  document.getElementById('wrap-form').classList.remove('active')
})











// item.append(src)
// item.append(descr)
// item.append(date)
// list.innerHTML = `${tables.map(el => {
//   const item = document.createElement('li')
//   const src = document.createElement('img')
//   const descr = document.createElement('span')
//   const date = document.createElement('span')
//   src.src = el.img
//   descr = el.descr
//   date = el.date
//   list.append(item)
// })}`
// item.innerHTML = 'элемент 1'
// list.append(item)