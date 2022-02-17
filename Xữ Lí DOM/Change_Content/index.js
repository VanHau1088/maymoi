let button1= document.getElementById('btn');
let button2 = document.getElementById('btn2');

let content = document.getElementById('content');


button1.onclick = () =>{
    content.innerHTML = 'Nguyễn Văn Hậu đẹp trai';
}


button2.onclick = () => {
    content.innerHTML = 'Cố gắng Hậu à';
}



let img1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUIvxvR1Wn2z13-1UePUZjDjm6HehitPLT92YKB-3b2nj3ryYSQPmqI27y2ksnjwloFMg&usqp=CAU';

let img2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4BYh4P5-I7MMxUPhTN0O1SG_l6lWfc-S4py5ddDyVx-oLjwZagZ2mbCOgKO4oHi71gw&usqp=CAU';


let button_img1 = document.getElementById('btn3');
let button_img2 = document.getElementById('btn4');

let content_img = document.getElementById('img_btn');

button_img1.onclick = () => {
    content_img.src = img1;
}

button_img2.onclick = () => {
    content_img.src = img2;
}
