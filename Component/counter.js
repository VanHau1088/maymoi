import { renderBySecond } from "./common/settime.js";
class Counter {
  $containner;
  $lable;
  $btnStart;
  $btnEnd;
  $counter;
  $HandleInterel;
  $btnPause;

  constructor() {
    this.$containner = document.createElement("div");
    this.$lable = document.createElement("div");
    this.$btnStart = document.createElement("button");
    this.$btnEnd = document.createElement("button");
    this.$btnPause = document.createElement("button");

    this.$containner.classList.add("d-flex");
    this.$btnStart.classList.add("btn", "btn-primary");
    this.$btnEnd.classList.add("btn", "btn-success");
    this.$btnPause.classList.add("btn", "btn-danger");

    // classList: OJ chứa những cái class của thằng đấy
    // add: Nhận vào các class, dc phân tách với nhau bởi dấu phẩy
    this.$btnStart.addEventListener("click", this.handleStart);
    this.$btnEnd.addEventListener("click", this.handleEnd);
    this.$btnPause.addEventListener("click", this.handlePause);

    this.$btnStart.innerText = "Start";
    this.$btnEnd.innerText = "End";
    this.$btnPause.innerText = "Pause";
    this.$lable.innerText = "00:00";

    this.$counter = 0;
    this.$HandleInterel;
  }

  handleStart = () => {
    console.log("Start");
    this.$HandleInterel = setInterval(() => {
      this.$counter++;
      this.$lable.innerText = renderBySecond(this.$counter);
    }, 1000);
  };

  handleEnd = () => {
    console.log("Stop");
    clearInterval(this.$HandleInterel);
    this.$counter -= this.$counter;
    this.$lable.innerText = renderBySecond(this.$counter);
  };

  handlePause = () => {
    console.log("Pause");
    clearInterval(this.$HandleInterel);
  };

  render() {
    this.$containner.append(
      this.$lable,
      this.$btnStart,
      this.$btnEnd,
      this.$btnPause
    );
    return this.$containner;
    // trả ra 1 object có dạng là elemnet HTML
    // 15. trả ra cái tổng chứa những thằng con ở bên trong -> append.
  }
}

export default Counter;
