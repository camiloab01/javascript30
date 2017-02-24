var controls = document.querySelectorAll('.controls input');

function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

controls.forEach(function(c){
    c.addEventListener('change', handleUpdate);
});