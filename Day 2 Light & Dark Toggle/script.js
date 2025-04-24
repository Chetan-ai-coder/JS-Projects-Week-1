let greet = document.getElementById('btn');

greet.addEventListener('click', () => {
    let name = document.getElementById('entered_name').value;
    alert(`Hello, ${name}! Welcome back!`);
});

let toggle = document.getElementById('toggle');
toggle.addEventListener('click', () =>{
    document.body.classList.toggle('mood');
});