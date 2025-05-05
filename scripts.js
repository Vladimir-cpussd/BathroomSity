document.getElementById('webSite').addEventListener('click', function() {
    window.open ('https://www.google.ru', '_blank', 'noopener,noreferrer');
})


const form = document.getElementById('telegram-form');
form.addEventListener('submit', function(e) {
  e.preventDefault(); 
  
  
  const lastSubmitTime = localStorage.getItem('lastTelegramSubmit');
  const currentTime = new Date().getTime();
  if (lastSubmitTime && (currentTime - lastSubmitTime < 60000)) { 
    alert('Пожалуйста, подождите минуту для отправки.');
    return;
  }
  const phone = document.getElementById('phone').value;
  const name = document.getElementById('name').value;
  // для коммерческой реализации необходим сервер, чтобы токена и id не было на клиентской стороне.
  const botToken = '7938871186:AAFtyY9ZCo7dYc9yosDYR0a-V0hQ-hCaY-M';
  const chatId = '1842147514';
  const text = `Новая заявка\nИмя: ${name}\nТелефон: ${phone}`;
  
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`)
    .then(response => {
      localStorage.setItem('lastTelegramSubmit', currentTime.toString());
      alert('Заявка отправлена, мы свяжемся с Вами в течение 3-х рабочих дней, Спасибо!');
      form.reset(); 
    })
    .catch(error => {
      alert('Ошибка! Попробуйте ещё раз.');
      console.error(error);
    });
});


 