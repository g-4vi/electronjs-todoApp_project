window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (value) {
      addTodo(value);
      input.value = '';
    }
  });

  function addTodo(text) {
    const li = document.createElement('li');
    li.textContent = text;
    li.addEventListener('click', () => {
      li.classList.add('striked');
      setTimeout(() => li.remove(),1000);
    });
    list.appendChild(li);
  }
});
