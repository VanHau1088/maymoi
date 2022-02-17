


let button = document.getElementById('btn_color');
button.addEventListener('click', () => {
    


    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256); 
    
    let color = "rgb(" + x + "," + y + "," + z  + ")"
      
    document.body.style.backgroundColor = color;

});

 
