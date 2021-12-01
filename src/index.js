document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    makeTodo(e.target.newTask.value)
  })
});

function makeTodo(todo) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'DONE'
  li.textContent = `${todo}  `
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
  
}

function handleDelete(e) {
  e.target.parentNode.remove()
}