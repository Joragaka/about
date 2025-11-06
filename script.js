// Тёмная/светлая тема
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.textContent = currentTheme === 'dark' ? 'Светлая тема' : 'Тёмная тема';

themeToggle.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.textContent = next === 'dark' ? 'Светлая тема' : 'Тёмная тема';
});

// Форма — простая валидация и имитация отправки
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const clearBtn = document.getElementById('clearBtn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get('name') || '').trim();
  const email = (data.get('email') || '').trim();
  const message = (data.get('message') || '').trim();

  if (!name || !email || !message) {
    status.textContent = 'Пожалуйста, заполните все поля.';
    status.style.color = 'crimson';
    return;
  }
  // Сейчас имитация отправки (замените на реальный endpoint при необходимости)
  status.textContent = 'Отправка...';
  status.style.color = '';
  setTimeout(() => {
    status.textContent = 'Спасибо! Сообщение отправлено (имитация).';
    status.style.color = 'green';
    form.reset();
  }, 800);
});

clearBtn.addEventListener('click', () => {
  form.reset();
  status.textContent = '';
});

// Текущий год в футере
document.getElementById('year').textContent = new Date().getFullYear();
