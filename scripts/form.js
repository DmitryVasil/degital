
document.getElementById('wrap-form').innerHTML = `
  <form id="form" class="form">
  <label class="form__label">
    Укажите кол-во товаров:
      <input value="1" class="form__input" id="count-item" type="number" placeholder="Колличество">
    </label>
      <div>
    <p>Укажите цвет:</p>
    <label class="form__label">
      <input class="real-radio" type="radio" name="color" value="red">
      <span class="costum-radio costum-radio--red"></span>
      Красный
    </label>
    <label class="form__label">
      <input class="real-radio" type="radio" name="color" value="blue">
      <span class="costum-radio costum-radio--blue"></span>
      Синий
    </label>
    <label class="form__label">
      <input class="real-radio" type="radio" name="color" value="black">
      <span class="costum-radio costum-radio--black"></span>
      Черный
    </label>
  </div>
  <textarea required class="form__textarea" name="" id="" cols="30" rows="10" placeholder="Ваш коментарий"></textarea>
  <div class="wrap__button">
    <button id="buy" type="submit" class="furniture__button">Купить</button>
    <button id="clouse" class="furniture__button">Закрыть</button>
  </div>
  </form>
`
document.getElementById('buy').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('form').classList.remove('active')
  alert('Поздравляем с приобретением товара')
  document.getElementById('wrap-form').classList.remove('active')
})

document.getElementById('clouse').addEventListener('click', (event) => {
  event.preventDefault()
  document.getElementById('wrap-form').classList.remove('active')
})
