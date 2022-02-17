import Couter from "./couter.js";
import { renderBySecond } from "./common/settime.js";

const c1 = new Couter;
const c2 =  new Couter;
const c3 =  new Couter;
document.getElementById('app').append(c1.render(), c2.render(), c3.render());

const buttonStatAll = document.createElement('button');
buttonStatAll.innerText = 'Stat All';
buttonStatAll.classList.add('btn', 'btn-danger');

const buttonStopAll = document.createElement('button');
buttonStopAll.innerText = 'Stop All';
buttonStopAll.classList.add('btn', 'btn-danger');

const handleStartAll = () =>{
    console.log("Start All");
    c1.$HandleInterel = setInterval( ()=>{
        c1.$count++;
        c2.$count++;
        c3.$count++;
        c1.$lable.innerText = renderBySecond(c1.$count);
        c2.$lable.innerText = renderBySecond(c2.$count);
        c3.$lable.innerText = renderBySecond(c3.$count);
    },1000);
}

const handleStopAll = () =>{
    console.log('Stop All');
    clearInterval(c1.$HandleInterel);
    clearInterval(c2.$HandleInterel);
    clearInterval(c3.$HandleInterel);

    c1.$count = 0;
    c2.$count = 0;
    c3.$count = 0;

    c1.$lable.innerText = renderBySecond(c1.$count);
    c2.$lable.innerText = renderBySecond(c2.$count);
    c3.$lable.innerText = renderBySecond(c3.$count);
}

buttonStatAll.addEventListener('click', handleStartAll );
buttonStopAll.addEventListener('click', handleStopAll );
document.getElementById('app').appendChild(buttonStatAll);
document.getElementById('app').appendChild(buttonStopAll);