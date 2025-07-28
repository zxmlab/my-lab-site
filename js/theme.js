// js/theme.js
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');

  // 根据当前主题更新按钮文字
  function updateButtonText(theme) {
    if (theme === 'dark') {
      themeToggle.textContent = '☀️ 亮色模式';
    } else {
      themeToggle.textContent = '🌙 暗黑模式';
    }
  }

  // 初始化主题
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateButtonText(savedTheme);

  // 点击切换主题
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonText(newTheme);
  });
});
