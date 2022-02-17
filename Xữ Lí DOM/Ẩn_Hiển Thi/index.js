

let button1 = document.getElementById('an');

let button2 = document.getElementById('them');


let content = document.getElementById('content');

button1.onclick = () => {
        content.style.display = 'none';

}

button2.onclick = () =>{
        content.style.display = 'block';
}