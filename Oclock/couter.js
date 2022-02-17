import { renderBySecond } from "./common/settime.js";

class Couter{
    $container;
    $lable;
    $buttonStart;
    $buttonStop;
    $buttonPause;
    $count;
    $HandleInterel;
    constructor(id){
        this.$container = document.createElement('div')
        this.$lable = document.createElement('div');
        this.$buttonStart = document.createElement('button');
        this.$buttonStop = document.createElement('button');
        this.$buttonPause = document.createElement('button');
        this.$container.id = id;
        this.$count = 0;

        //content
        this.$lable.innerText = '00:00';
        this.$buttonStart.innerText = 'Start';
        this.$buttonStop.innerText = 'Stop';  
        this.$buttonPause.innerText = 'Pause';

        // màu săc
        this.$container.classList.add('d-flex');
        this.$lable.classList.add('lable');
        this.$buttonStart.classList.add("btn", "btn-primary");
        this.$buttonStop.classList.add('btn', 'btn-success');
        this.$buttonPause.classList.add('btn', 'btn-danger');
    
        // sự kiện
        this.$buttonStart.addEventListener('click', this.handleStart);
        this.$buttonStop.addEventListener('click', this.handleStop);
        this.$buttonPause.addEventListener('click', this.handlePause);
    }

    render(){
        this.$container.append(this.$lable, this.$buttonStart, this.$buttonStop, this.$buttonPause);
        return this.$container;
    }

    handleStart = () => {
        console.log("Start");
        this.$HandleInterel = setInterval(()=>{
            this.$count++;
            this.$lable.innerText = renderBySecond(this.$count);
        },1000)
    }

    handleStop = () =>{
        console.log("Stop");
        this.$count = 0;
        this.$lable.innerText = renderBySecond(this.$count);
        clearInterval(this.$HandleInterel);
    }

    handlePause = () =>{
        console.log('Pause');
        clearInterval(this.$HandleInterel);
    }

}

export default Couter;