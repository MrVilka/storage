document.addEventListener("DOMContentLoaded", function() {
    // Получить кнопки темы
    var lightThemeBtn = document.getElementById('lightThemeBtn');
    var darkThemeBtn = document.getElementById('darkThemeBtn');

    // Проверить, есть ли сохраненная тема в localStorage
    var theme = localStorage.getItem('theme');
    if (theme) {
        document.body.classList.add(theme); // применить сохраненную тему
    }

    // Обработчики событий для кнопок
    lightThemeBtn.addEventListener('click', function() {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        localStorage.setItem('theme', 'light'); // сохранить тему в localStorage
    });

    darkThemeBtn.addEventListener('click', function() {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark'); // сохранить тему в localStorage
    });
});
