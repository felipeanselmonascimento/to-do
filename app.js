const form = document.querySelector('.form-add-todo');
const ul = document.querySelector('.todos-container');
const input = document.querySelector('.form-control');

form.addEventListener('submit', event => {
    event.preventDefault();

    const InputValue = event.target.add.value.trim();

    if (InputValue.length){
        ul.innerHTML += 
        `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${InputValue}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>`

        event.target.reset()
    }
    
})


ul.addEventListener('click', event => {
    const classL = Array.from(event.target.classList).includes('delete');

    if (classL){
        event.target.parentElement.remove()
    }

})


input.addEventListener('input', event => {
    const inputSearch = event.target.value.trim().toLowerCase();

    Array.from(ul.children)
    .filter(li => !li.textContent.toLowerCase().includes(inputSearch))
    .forEach(li => {
        li.classList.remove('d-flex')
        li.classList.add('hidden')
    })
    Array.from(ul.children)
    .filter(li => li.textContent.toLowerCase().includes(inputSearch))
    .forEach(li => {
        li.classList.remove('hidden')
        li.classList.add('d-flex')
    })
    
})

