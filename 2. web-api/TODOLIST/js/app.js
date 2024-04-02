
// const $todoText = document.getElementById('todo-text');
const $add = document.getElementById('add');

// 일정 넣기
function renderNewTodo({id, text}) {
  const $toDoList = document.querySelector('.todo-list');
  const $newLi = document.createElement('li');
  $newLi.classList.add('todo-list-item');
  $newLi.dataset.id = id;
  $newLi.innerHTML = `
      <label class="checkbox">
                            <input type="checkbox">
                            <span class="text">${text}</span>
                        </label>
                        <div class="modify">
                            <span class="lnr lnr-undo"></span>
                        </div>
                        <div class="remove">
                            <span class="lnr lnr-cross-circle"></span>
                        </div>
  `;

  $toDoList.appendChild($newLi);
}

$add.addEventListener('click', (i) => {
  i.preventDefault();
  renderNewTodo(i);
})