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