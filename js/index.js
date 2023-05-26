const $tables = document.getElementById('tables')
const $chairs = document.getElementById('chairs')

const mapCards = (array, furniture) => {
  array.forEach(el => {
    furniture.innerHTML += `
      <li id="${el.id}" class="furniture__item">
      <picture class="furniture__pict">
        <img class="furniture__img" src="${el.img}">
      </picture>
        <span class="furniture__descr">${el.descr}</span>
        <span class="furniture__descr">${getDayInfo(el.date)}</span>
        <button onclick="openForm()" id="open-form" class="furniture__button">Купить</button>
      </li>
    `
  })
}

mapCards(tables, $tables)
mapCards(chairs, $chairs)

function openForm() {
  document.getElementById('wrap-form').classList.add('active')
}
