document.getElementById('webSite').addEventListener('click', function() {
    window.open ('https://www.google.ru', '_blank', 'noopener,noreferrer');
})


document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.products-scroll-container');
    const wrapper = document.querySelector('.products-scroll-wrapper');
    const items = wrapper.querySelectorAll('img');
    const speed = 1; // Скорость прокрутки (пикселей за кадр)
    
    // Клонируем элементы для бесконечного эффекта
    wrapper.innerHTML += wrapper.innerHTML;
    
    // Автопрокрутка
    function autoScroll() {
      container.scrollLeft += speed;
      
      // Когда дошли до середины (конца оригинальных элементов)
      if (container.scrollLeft >= wrapper.scrollWidth / 2) {
        container.scrollLeft = 0; // Мгновенно возвращаем в начало
      }
      
      requestAnimationFrame(autoScroll);
    }
    
    // Пауза при наведении
    let isScrolling = true;
    container.addEventListener('mouseenter', () => isScrolling = false);
    container.addEventListener('mouseleave', () => isScrolling = true);
    
    // Запускаем прокрутку
    function animate() {
      if (isScrolling) {
        container.scrollLeft += speed;
        
        if (container.scrollLeft >= wrapper.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
  });