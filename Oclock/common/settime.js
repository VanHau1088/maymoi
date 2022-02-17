export function renderBySecond(timer){
    let second = timer % 60;
    let min = Math.floor(timer / 60);

    if(second < 10){
        second = '0' + second;
    }
    if(min < 10){
        min = '0' + min;
    }
    
    return `${min}:${second}`;
}