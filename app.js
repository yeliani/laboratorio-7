const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

const tasksContainer = document.getElementById('tasksContainer');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');
const pendingTasks = document.getElementById('pendingTasks');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};

const addTask = name => {
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.textContent = name;
    task.addEventListener('click', toggleTaskState);
    tasksContainer.appendChild(task);
};

const toggleTaskState = event => {
    event.target.classList.toggle('done');
    updateTaskCount();
};

const updateTaskCount = () => {
    const total = tasksContainer.childElementCount;
    const completed = tasksContainer.querySelectorAll('.done').length;
    totalTasks.textContent = total;
    completedTasks.textContent = completed;
    pendingTasks.textContent = total - completed;
};

const initializeTasks = () => {
    const defaultTasks = [
        'sacar al perro',
        'Hacer ejercicio ',
        'Leer 1hora',
        'Llamar a marta',
        'Limpiar',
        'Preparar la comida',
        'Escribir el ensayo',
        'Organizar',
        'regar las plantas',
        'guardar la ropa'
    ];
    defaultTasks.forEach(task => {
        addTask(task);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    setDate();
    initializeTasks();
    updateTaskCount();
});

