import Counter from "./counter.js";
import { renderBySecond } from "./common/settime.js";

const c = new Counter();
const c1 = new Counter();
const c2 = new Counter();

const btnStarAll = document.createElement("button");
btnStarAll.innerText = "Start All";
btnStarAll.classList.add("btn", "btn-danger");

const btnStopAll = document.createElement("button");
btnStopAll.innerText = "Stop All";
btnStopAll.classList.add("btn", "btn-danger");

const handleStartAll = () => {
  console.log("Start All");

  c.$HandleInterel = setInterval(() => {
    c.$counter++;
    c1.$counter++;
    c2.$counter++;

    c.$lable.innerText = renderBySecond(c.$counter);
    c1.$lable.innerText = renderBySecond(c1.$counter);
    c2.$lable.innerText = renderBySecond(c2.$counter);
  }, 1000);
};

const handleStopAll = () => {
  console.log("Stop All");
  clearInterval(c.$HandleInterel);
  clearInterval(c1.$HandleInterel);
  clearInterval(c2.$HandleInterel);
  c.$counter -= c.$counter;
  c1.$counter -= c1.$counter;
  c2.$counter -= c2.$counter;
  c.$lable.innerText = renderBySecond(c.$counter);
  c1.$lable.innerText = renderBySecond(c1.$counter);
  c2.$lable.innerText = renderBySecond(c2.$counter);
};

btnStarAll.addEventListener("click", handleStartAll);
btnStopAll.addEventListener("click", handleStopAll);

document.getElementById("app").appendChild(c.render());
document.getElementById("app").appendChild(c1.render());
document.getElementById("app").appendChild(c2.render());
document.getElementById("app").appendChild(btnStarAll);
document.getElementById("app").appendChild(btnStopAll);
