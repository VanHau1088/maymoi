function kt_PrimeNumber(n){

        let prime = true;
        if(n < 2){
            prime = false;
        }
        else{
            for(let i=2; i<n-1; i++){
                if(n%i==0){
                    prime = false;
                    break;
                }
            }
        }
            return prime;
    }
function print_PrimeNumber(){
    let number = document.getElementById('btn').value;

    number = parseInt(number);

    let html = ' ';
    
    for(let i = 1; i < number; i++){
            if(kt_PrimeNumber(i)){
                html += i + "<br/>"; 
            }
    }
    document.getElementById('result').innerHTML = html;
}